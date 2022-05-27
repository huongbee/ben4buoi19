const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: new Date
  }
});
const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;