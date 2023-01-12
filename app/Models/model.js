let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
async _connect() {
    try{
      mongoose.set('strictQuery', true);
      await mongoose.connect(`mongodb+srv://admin:thenura1@brainstorm-cluster.8pyaz7x.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database connection successful!')
    }
    catch(err) {
      console.error('Database connection error : \n -------------------------------- \n ' + err)
    }
    finally{
      // await mongoose.connection.close();
      // console.log('Database connection Closed!')
    }
  }
}

module.exports = new Database()
