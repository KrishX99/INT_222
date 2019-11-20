const express = require('express');
const router = express.Router();
const Joi = require('joi');
const students = require('../models/student');

router.post('/insert' , (req,res) => {
  const student = {
    name : req.body.name,
    age: parseInt(req.body.age)
  }

  const schema = {
    name : Joi.string().min(4).max(16).required(),
    age : Joi.number().min(1).max(100).required()
  }

  const result = Joi.validate(student , schema);

  if(result.error){
    res.status(400).json({
      msg:result.error.details[0].message
    })
  }
  else{
    students.push(student);
    res.json(students);
  }
})


module.exports = router;