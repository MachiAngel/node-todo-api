const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



//remove document
// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findByIdAndRemove('59fade8747b8199bd48eb39e').then( (todo) => {
  console.log(todo);
})
