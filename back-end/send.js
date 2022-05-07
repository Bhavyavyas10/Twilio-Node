const http = require("http");
const express = require("express");
const accountSid = "AC09f4d977bb57d390271ecfdb3d494244";
const authToken = "85ffd5aa030b0f02a9152abd9e3337f6";
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json())

app.post('/sms', async (req,res) => {

    console.log(req.body)


    const {payload,phone} = req.body

    client.messages
    .create({
    body: payload,
    from: '+19894364257',
    to: phone
    })
    .then(message => console.log(message.sid));

    res.send({data:"SMS Sent!!!"})
})

http.createServer(app).listen(5500, () => {
    console.log("Server Started...");
})