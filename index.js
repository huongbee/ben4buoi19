const express = require('express');
const mongoose = require('mongoose');
const StudentModel = require('./StudentModel');

const app = express();
// const url = 'mongodb://localhost:27017/testben4buoi19';
const url = 'mongodb+srv://userben4:u9yg4DXjjHsfkJQm@cluster0.l3ha3r8.mongodb.net/testben4buoi19?retryWrites=true&w=majority'
mongoose.connect(url, {})
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => console.log('Error connecting....' + err.message));



app.get('/', (req, res) => {
  return res.json({
    name: 'BEN4',
    address: 'Kmin Quan 3'
  });
});

app.get('/add', async (req, res) => {
  const name = 'user-' + Math.round(Math.random() * 1000);
  const result = await StudentModel.create({
    name,
    email: name + '@example.com',
    createdAt: new Date()
  });
  if (result) {
    return res.json({
      success: true,
      message: 'Inserted user: ' + name
    })
  }
  return res.json({
    success: false,
    message: 'Insert failed'
  })
});
app.get('/list', async (req, res) => {
  const students = await StudentModel.find().select('-_id name email createdAt')
  return res.json({ students });
});

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server start on port ${port}`);
  }
});

// userben4
// u9yg4DXjjHsfkJQm