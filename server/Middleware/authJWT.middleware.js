import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET

export const isLoggedIn = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            //    Token Format 
            //Bearer <token>
            const token = req.headers.authorization.split(" ")[1]

            if (token) {
                const payload = await jwt.verify(token, SECRET)

                if (payload) {
                    req.user = payload
                    next()
                } else {
                    res.status(400).json({ message: 'Failed to verify ' })
                }
            } else {
                res.status(400).json({ message: 'Error with Authorization Header' })
            }
        } else {
            res.status(400).json({ message: "No Authorization header found" })
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}