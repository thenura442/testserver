const express = require('express');
const cors = require('cors');
const app = express();


app.route('/api/users').post((req,res) => {
    //res.send(400,{errorMessage: 'User not found'})
    res.send(201,req.body)
})

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.listen(9000, () => {
    console.log(`Server Just Started!`)
});

// express deprecated res.send(status, body): Use res.status(status).send(body) instead server.js:7:9