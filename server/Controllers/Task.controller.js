
import Status from "../Models/Status.js"
import Task from "../Models/Task.js"
import User from "../Models/User.js"
import path from 'path'
// TODO Create Migration File
export const createStatus = async (req, res) => {

    const status = ['To Do', 'In Progress', 'Completed']

    status.map(async (item) => {
        let data = new Status({ name: item })
        await data.save()
    })

    return res.status(200).json({ message: 'Success' })
}


export const getAll = async (req, res) => {
    // Auth Middleware binds users id to req.user object 
    const user = req.user

    try {
        // find user email
        // const user = await User.findOne({ email: email })
        // find tasks
        const tasks = await Task.find({ user: user._id })

        if (!tasks || !tasks.length) {
            return res.status(200).json({ message: 'Create your first task' })
        }
        // return all tasks for the user 
        return res.status(200).json(tasks)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


export const createTask = async (req, res) => {

    const { name, desc, statusId } = req.body
    const { originalname } = req.file

    // Auth Middleware binds users id to req.user object 
    const user = req.user

    if (!name || !statusId) {

        return res.status(400).json({ message: 'Error: can not create task without Name or Status' })
    }


    // Save to task model  
    const newTask = new Task({ name, desc, status: statusId, attachment: originalname, user: user._id })

    try {
        newTask.save()
        return res.status(201).json(newTask)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params

    // Deconstruct Req 
    const { name, desc, statusId } = req.body
    const { originalname } = req.file

    // Create filter to query Task Model 
    const filter = { _id: id }
    // Create Update object 
    const update = { name, desc, status: statusId, attachment: originalname }
    try {
        let task = await Task.findByIdAndUpdate(filter, update, {
            new: true
        })
        return res.status(201).json(task)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

