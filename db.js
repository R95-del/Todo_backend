const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.q72jabf.mongodb.net/")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
}
