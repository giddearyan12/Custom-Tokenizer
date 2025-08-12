<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Custom Token Encoder/Decoder API - README</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

    <h1>Custom Token Encoder/Decoder API</h1>
    <p>This project is a simple Node.js and Express-based API that encodes text into token IDs and decodes token IDs back to their original words using MongoDB for storage.</p>

    <h2>📌 Features</h2>
    <ul>
        <li>Encode text into unique token IDs</li>
        <li>Decode token IDs back to their original text</li>
        <li>Stores token mappings in MongoDB</li>
    </ul>

    <h2>🛠 Tech Stack</h2>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB (via Mongoose)</li>
    </ul>

    <h2>📂 Project Structure</h2>
    <pre>
.
├── database.js       
├── index.js           
└── package.json
    </pre>

    <h2>⚙️ Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre>git clone &lt;https://github.com/giddearyan12/Custom-Tokenizer&gt;</pre>
        </li>
        <li>Install dependencies:
            <pre>npm install</pre>
        </li>
        <li>Make sure MongoDB is running locally:
            <pre>mongodb</pre>
        </li>
        <li>Run the server:
            <pre>node CustomToken.js</pre>
        </li>
    </ol>

    <h2>📌 API Endpoints</h2>

    <h3>1️⃣ Encode Text</h3>
    <p><strong>POST</strong> <code>/api/encode</code></p>
    <p>Encodes a given text into token IDs.</p>
    <strong>Request Body:</strong>
    <pre>
{
    "text": "hello world"
}
    </pre>
    <strong>Response:</strong>
    <pre>
{
    "results": [12, 45]
}
    </pre>

    <h3>2️⃣ Decode Tokens</h3>
    <p><strong>POST</strong> <code>/api/decode</code></p>
    <p>Decodes token IDs back into original text.</p>
    <strong>Request Body:</strong>
    <pre>
{
    "tokens": [12, 45]
}
    </pre>
    <strong>Response:</strong>
    <pre>
{
    "results": "hello,world"
}
    </pre>

    <h2>📌 How It Works</h2>
    <ol>
        <li>When encoding, each word is checked in MongoDB.</li>
        <li>If the word exists, its existing token ID is returned.</li>
        <li>If it doesn't exist, a random token ID is generated, stored in the database, and returned.</li>
        <li>When decoding, token IDs are mapped back to their original stored words.</li>
    </ol>

    <h2>📜 License</h2>
    <p>This project is for learning and demonstration purposes. You can modify and use it as you wish.</p>

</body>
</html>
