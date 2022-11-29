
import Status from "../Models/Status.js"
import Task from "../Models/Task.js"
import User from "../Models/User.js"
import path from 'path'



export const getAll = async (req, res) => {
    // Auth Middleware binds users id to req.user object 
    const user = req.user

    try {
        // find user email
        // const user = await User.findOne({ email: email })
        // find tasks
        const tasks = await Task.find({ user: user._id }).populate('status')

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


    const { name, desc, statusId, attachment } = req.body
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


//filter by Status
export const filterByStatus = async (req, res) => {
    const { statusId } = req.params
    const user = req.user

    try {

        const filteredTasks = await Task.find({ user: user._id, status: statusId }).populate('status')

        if (!filteredTasks || filteredTasks.length == 0) {
            return res.status(404).json({ message: 'No Tasks Found!' })
        }
        // return Filtered Tasks
        return res.status(200).json(filteredTasks)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

//filter by Created Time
export const fillterByDate = async (req, res) => {

    const { fromDate, toDate } = req.body
    const from = new Date(fromDate)
    const to = new Date(toDate)


    try {

        const filteredTasks = await Task.find({ created_at: { $gte: `${from}`, $lte: `${to}` } }).populate('status')

        if (!filteredTasks || filteredTasks.length == 0) {
            return res.status(404).json({ message: 'No Tasks Found!' })
        }
        // return Filtered Tasks
        return res.status(200).json(filteredTasks)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}