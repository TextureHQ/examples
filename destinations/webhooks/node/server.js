const express = require('express');
const { verify } = require('./verification');

const PORT = 4321;
const app = express();
const secret = process.env.WEBHOOK_SECRET || 'secret';
app.use(express.json());

app.post('/webhook', (req, res) => {
    // Just log out the body so you can see it was received
    console.log("webhook payload", req.body)
    console.log("webhook headers", req.headers)
    const signature = req.headers['texture-signature'];
    console.log("webhook verified", verify(req.body, secret, signature));
    
    // You can optionally verify the body to ensure it came
    // directly from Texture without tampering
    res.send('ok');
});  

app.listen(PORT, () => console.log(`Webhook server is listening, port ${PORT}`));