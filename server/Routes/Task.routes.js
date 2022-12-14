import express from 'express'
import multer from 'multer'
import { isLoggedIn } from '../Middleware/authJWT.middleware.js'
import { createTask, fillterByDate, filterByStatus, getAll, updateTask } from '../Controllers/Task.controller.js'


var upload = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, callback) {
                callback(null, 'Public/uploads/');
            },
            filename: function (req, file, callback) {
                callback(
                    null,
                    file.originalname
                );
            }
        }
    ),
});

const router = express.Router()

router.get('/get', isLoggedIn, getAll)
router.post('/create', upload.single('attachment'), isLoggedIn, createTask)
router.put('/update/:id', isLoggedIn, upload.single('attachment'), updateTask)
router.get('/filter/status/:statusId', isLoggedIn, filterByStatus)
router.post('/filter/date', isLoggedIn, fillterByDate)


export default router