const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")  
let UserModel = require('./app/Models/user')
let DB = require('./app/Models/model')

const app = express();
const dbUrl = process.env.DBURL || "mongodb+srv://admin:thenura1@brainstorm-cluster.8pyaz7x.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 9000;

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.bodyParser());

// mongoose.connect(
//   dbUrl, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });



app.get('/', (req, res) => {
  res.send("Hello My World!")
//   console.log("started!")
});

app.route('/api/users').put((req,res) => {
    //res.send(400,{errorMessage: 'User not found'})
    //req.body.append({server_id:  '1234567890'})
    // res.send(201,req.body)
    let msg = new UserModel({
      Name: req.body.Name,
      Email: req.body.Email,
      Id: req.body.Id,
      Password: req.body.Password
    })
    
    msg.save()
       .then(doc => {
         console.log(doc)
         res.send(201,doc)
       })
       .catch(err => {
         console.error(err)
       })
    // res.status(400).send(req.body)
    // res.status(200).send(req.body)
})

//app.use(bodyParser.json());  For what is this used
app.listen(port, () => {
    console.log(`Server Just Started!`)
});

// express deprecated res.send(status, body): Use res.status(status).send(body) instead server.js:7:9