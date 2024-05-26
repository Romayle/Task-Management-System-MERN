const Task = require('../models/taskModel')
const mongoose = require('mongoose')

// get all task
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1}) //find() returns all. if i need return all results of something specific, ex- return results of reps = 20, then you can add it in the {} of find()

    res.status(200).json(tasks)
}

// get a single task
const getTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findById(id)

    if (!task) {
        return res.status(404).json({error: 'No such task'})
    }

    res.status(200).json(workout)
}

// create new task
const createTask = async (req, res) => {
    // console.log("req,:  ", req.body)
    const {title, description, importance} = req.body //all the values from the POST req, where you would be getting the title, load and reps in the form of json would be stored taken from the req.body

    // add doc to db
    try {
        const task = await Task.create({title, description, importance}) // create() is a pre defined function given by mongoose, it allows us to create and add instance into the db 
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndDelete({_id: id})

    if (!task) {
        return res.status(400).json({erorr: 'No such task'})
    }

    res.status(200).json(task)
}

// update a task
const updateTask = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!task) {
        return res.status(400).json({erorr: 'No such task'})
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}