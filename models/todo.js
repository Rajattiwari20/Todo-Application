const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description  : {
        type : String,
        require : true
    },
    
    category : {
        type : String,
        require : true
    }, 

    deadline : {
        type : Date,
        require : true
    }
});

const Todo = mongoose.model('Todo' , todoSchema);

module.exports = Todo;