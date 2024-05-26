require('dotenv').config() // used npm install dotenv, so we can use PORT in .env

const express = require('express')
//create express app
const app = express()

// // listen for reqests
// app.listen(process.env.PORT, () => {
//     console.log('connected to db & listening on port', process.env.PORT)
// })

// respond to a get request
// app.get('/', (req, res) => {
//     res.jso({mssg: 'Welcome to the app'})
// })

// middleware, inorder to display all requests to the console 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const tasksRoutes = require('./routes/tasks')



// middleware
app.use(express.json()) //for post and patch requests to send data to the data base, we can acsess it using the req object. but we can only acess the req obj using a middlewear

//new Routes
app.use('/api/tasks', tasksRoutes) // if we fire a request to '/api/tasksRoutes' then use tasksRoutes function

/*npm install mongoose was used

mongoose is a odm library (object data modeling), it basically raps up mongoDB with an extra layer of methods that allow us to read and
write database doccuments. it also give us the ability to declare models and schemas to ensure a more strict data structure*/

const mongoose = require('mongoose')

// connect to db
// we can also use mongoose to connect to the db inside the server.js
mongoose.connect(process.env.MONGO_URI) //synchronus in nature which takes up a little bit of time, therefore it returns a promise
    .then(() => {
        // listen for reqests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    }) //makes sure to fire this function when completed
    .catch((error) => {
        console.log(error) //errors may occur if the URI is not the same
    })