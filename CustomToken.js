import express from 'express'
import mongoose from 'mongoose'
import { tokenModel } from './database.js'
const app = express()
const port = 8080
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/customTokens').then(()=>{
    console.log('MongoDB Connected');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/encode', async(req, res)=>{
    try {
        const {text} = req.body;
        const textSplit = text.split(' ');
        
       const results = await Promise.all(
         textSplit.map(async(token)=>{
            const exists = await tokenModel.findOne({token});
            if(exists){
                return exists.tokenId;
            }
            else{
                const temptokenId = Math.floor(Math.random() * (100-1));
                const newToken = new tokenModel({
                    token: token,
                    tokenId: temptokenId,
                })
                newToken.save();
                return temptokenId;

            }
        }))
        res.status(200).json({results})

    } catch (error) {
        res.status(500).json({success:false, msg:"Error"})
    }
})
app.post('/api/decode', async(req, res)=>{
    try {
        const {tokens} = req.body;
        const results = await Promise.all(
         tokens.map(async(tokenId)=>{
            const exists = await tokenModel.findOne({tokenId});
            if(exists){
                return exists.token;
            }
            else{
                return "unknown";
            }
        }))
        const joinString = results.join();
        res.status(200).json({results: joinString})

    } catch (error) {
        res.status(500).json({success:false, msg:"Error"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})