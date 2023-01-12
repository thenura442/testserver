const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")  
let UserModel = require('./app/Models/user')
let DB = require('./app/Models/model')
let control = require('./app/Controller/controller.js')

const app = express();
const dbUrl = process.env.DBURL || "mongodb+srv://admin:thenura1@brainstorm-cluster.8pyaz7x.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 9000;

var corsOptions = {
    origin: 'https://cms-dle.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// //app.use(express.bodyParser());
// app.use( bodyParser.urlencoded( {
//   extended: false,
//   limit: "20mb"
// } ) );
// app.use( bodyParser.json( { limit: "20mb" } ) );

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
  // res.json({success: true})
//   console.log("started!")
});

app.use("/api", require("./app/Routes/staff.routes"));
// app.route('/api/users').post((req,res) => {
//     //res.send(400,{errorMessage: 'User not found'})
//     //req.body.append({server_id:  '1234567890'})
//     // res.send(201,req.body)
//     let msg = new UserModel({
//       Name: req.body.Name,
//       Email: req.body.Email,
//       Id: req.body.Id,
//       Password: req.body.Password
//     })
    
//     msg.save()
//        .then(doc => {
//          console.log(doc)
//          res.send(201,doc)
//        })
//        .catch(err => {
//          console.error(err)
//        })
//     // res.status(400).send(req.body)
//     // res.status(200).send(req.body)
// })

//app.use(bodyParser.json());  For what is this used
app.listen(port, () => {
    console.log(`Server Just Started! on port ${port}`)
});

// express deprecated res.send(status, body): Use res.status(status).send(body) instead server.js:7:9