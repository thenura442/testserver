let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
async _connect() {
     await mongoose.connect(`mongodb+srv://admin:thenura1@brainstorm-cluster.8pyaz7x.mongodb.net/?retryWrites=true&w=majority`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()