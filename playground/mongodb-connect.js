
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err){
    return console.log('Unable to connect Mongodb server');
  }

  // db.collection('Todos').insertOne({
  //   test:"to do something",
  //   completed:false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });


  //insert new doc into Users
  // db.collection('Users').insertOne({
  //   name:'angel',
  //   age:29,
  //   location:"台中市雙十路一段35-1號"
  // },(err,result) => {
  //   if (err) {
  //     return console.log('unable to insert user',err);
  //   }
  //   console.log('-------------------------');
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log('-------------------------');
  //   console.log(result.ops[0]._id.getTimestamp());
  // })


  db.close();

});
