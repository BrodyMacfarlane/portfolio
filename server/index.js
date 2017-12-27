const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')

var app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json())
app.use(cors())

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '/../build/index.html'));
// })


app.listen(9001, console.log("Listening on port 9001"))