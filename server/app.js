const express = require('express');
const app = express();
const fs = require('fs');


const PORT = 3000;


app.listen(PORT, (error) => {
    if(error) console.error('Conection error')
    console.log(`server works on ${PORT} port`)
})