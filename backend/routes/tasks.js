// initially we handeled get requests in the server.js, since its not nice to keep them there we created the tasks.js to handle them instead.
// but inorder to handle requests we must use app.function(), and since tasks.js does not contain the variable app, we have to use the express router

const express = require('express')

const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controller/taskController')

const router = express.Router()

// GET all get Tasks
router.get('/', getTasks)

// GET a single get Task
router.get('/:id', getTask)

// POST a new Task
router.post('/', createTask)

// DELETE a new Task
router.delete('/:id', deleteTask)

// UPDATE a new Task
router.patch('/:id', updateTask)

module.exports = router

// const Workout = require('../models/taskModel')