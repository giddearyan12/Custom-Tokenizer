📦 Custom Token Encoder/Decoder API
This project is a Node.js + Express API that encodes text into token IDs and decodes token IDs back into words, storing all mappings in MongoDB.

🚀 Features
🔢 Encode text into unique token IDs.

🔄 Decode token IDs back to the original words.

🗄 Stores token mappings in MongoDB for persistence.

🛠 Tech Stack
Node.js
Express.js
MongoDB (via Mongoose)

📂 Project Structure

├── database.js      
├── index.js         
└── package.json     

⚙️ Installation & Setup
Clone the repository
git clone https://github.com/giddearyan12/Custom-Tokenizer
cd Custom-Tokenizer

Install dependencies
npm install
node CustomToken.js
Server will run at: http://localhost:8080

📌 API Endpoints
1️⃣ Encode Text
POST /api/encode
Encodes text into unique token IDs.

Request Body:

json
{
  "text": "hello world"
}
Response:
{
  "results": [12, 45]
}
2️⃣ Decode Tokens
POST /api/decode
Decodes token IDs back into words.

Request Body:
{
  "tokens": [12, 45]
}
Response:
{
  "results": "hello,world"
}
🔍 How It Works
Encoding:

Checks if each word exists in MongoDB.

If found → returns its existing token ID.

If not found → generates a random token ID, stores it in MongoDB, and returns it.

Decoding:

Finds the original word for each token ID in MongoDB.

If not found → returns "unknown".

📜 License
This project is for learning and demonstration purposes.
You can modify and use it as you wish.
