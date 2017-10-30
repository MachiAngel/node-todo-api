
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err){
    return console.log('Unable to connect Mongodb server');
  }

  // db.collection('Todos').find({
  //   _id: new ObjectID('59f74247d5a4433cb1ca5432')
  // }).toArray().then((docs) => {
  //   console.log('Todos :');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // })

  db.collection('Users').find({
    name:'angel'
  }).toArray().then((result) => {
    console.log('all angel data: ');
    console.log(JSON.stringify(result, undefined, 2));

  },(err) => {
    if (err) {
      console.log('unable to find angel query',err);
    }
  })



  //db.close();

});
