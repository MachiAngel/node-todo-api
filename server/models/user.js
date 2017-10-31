
var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type: String,
    required: true,
    minlengh:1,
    trim:true
  },
  name:{
    type: String,
    minlengh: 1,
    trim: true,
    default: 'visitor'
  },
  phone:{
    type: Number,
    minlengh: 5,
    trim:true
  }

})

module.exports = {
  User
};
