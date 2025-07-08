const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const students = await Student.find().exec();
  res.json(students);
});

router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id).exec();
  res.json(student);
});

router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
  res.json(student);
});

router.delete('/:id', async (req, res) => {
  await Student.findByIdAndRemove(req.params.id).exec();
  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;