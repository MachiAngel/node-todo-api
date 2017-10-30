
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err){
    return console.log('Unable to connect Mongodb server');
  }

  //delete many

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })


  //delete one

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })


  //find one and delete
  db.collection('Users').findOneAndDelete({_id:new ObjectID('59f7400e04566516f9c462e0')}).then((result) => {
    console.log(result);
  })

  db.collection('Users').deleteMany({name: 'angel'}).then((result) => {
    console.log(result);
  })



  //db.close();

});
