
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err){
    return console.log('Unable to connect Mongodb server');
  }

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f73ae997d5da16b57968ee')
  },{
    $set:{
      name: 'angel2'
    },
    $inc:{
      age:1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })


  //db.close();

});
