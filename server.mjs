import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
const app = express()

app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }],
  })
})

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name']
  res.send({ name: requestedCatName })
})

app.use(json())
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body)
})


app.route('/api/cats/:name').put((req, res) => {
  res.send(200, req.body)
})  

app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204)
})

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

// app.get('/', (req, res) => {
//   res.send("Hello World!")
//   console.log("started!")
// });

app.listen(8000, () => {
  console.log(`Server started!`)
});



