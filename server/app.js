const express = require('express');
const app = express();
const fs = require('fs');


const PORT = 3000;

app.get("/api/users", (req, res) => {
    fs.readFile("userInfo.json", "utf8", (err, data) => {
        if(err) {
            res.status(500).send({message: "error loading file on server"})
        } else {
            res.status(200).send(data);
        }
    })
})

app.listen(PORT, (error) => {
    if(error) console.error('Connection error')
    console.log(`server works on ${PORT} port`)
})