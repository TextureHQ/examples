const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { verify } = require('./verification');

const PORT = process.env.PORT;
const SECRET = process.env.WEBHOOK_SECRET;
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    // Just log out the body so you can see it was received
    console.log("webhook payload", req.body)
    console.log("webhook headers", req.headers)
    const signature = req.headers['texture-signature'];
    console.log("webhook verified", verify(req.body, SECRET, signature));
    
    // You can optionally verify the body to ensure it came
    // directly from Texture without tampering
    res.send('ok');
});  

app.listen(PORT, () => console.log(`Webhook server is listening, port ${PORT}`));