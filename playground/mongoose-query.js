const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//
// var id = '59f95cef16aaaf7d332d5284';


// if(ObjectID.isValid(id)) {
//   console.log('Id not found');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:',todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:',todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     console.log('id not found');
//   }else {
//     console.log('Todo by id:',todo);
//   }
//
// }).catch((e) => {
//   console.log(e);
// })




///////////assignment
var id = '59f875af911b3a5ef8e6a229'
User.findById(id).then((user) => {
  if (!user) {
    console.log('user not found');
  }else {
    console.log('user:',JSON.stringify(user, undefined, 2));
    console.log('user email:',user.email);
  }

}).catch((e) => console.log(e));
