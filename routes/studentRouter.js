const studentRouter = require('express').Router();
const Student = require('../models/student')

//get student 
studentRouter.get('/', (req, res) => {
    Student
        .find()
        .then(student => res.json(student))
        .catch(error => console.log(error))
})

//create student
studentRouter.post('/', (req, res) => {
    Student
        .create(req.body)
        .then(student => res.json(student))
        .catch(error => console.log(error))
})

//update student for given id
studentRouter.put('/:id', async (req, res) => {
    let studentFind = await Student.findOne({ _id: req.params.id })
    await Student.updateOne({ $set: req.body })
    studentFind = await Student.findOne({ _id: req.params.id })
        .then((newstudent) => res.json(newstudent))
        .catch(error => console.log(error))
})

//update all students whose name matches with name passed in rq.params.name
studentRouter.put('/updatename/:name', (req, res) => {
    //students = Student.find({ name: req.params.name })
    Student.updateMany({ name: req.params.name }, { $set: { name: req.body.name } })
        .then(() => res.json('Updated student'))
        .catch(error => console.log(error))
})



module.exports = studentRouter;