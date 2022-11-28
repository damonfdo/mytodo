import Status from "../Models/Status.js";

export const getStatus = async (req, res) => {
    try {
        const status = await Status.find()

        return res.status(201).json(status)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}