import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../api/axios.js'
import useAuth from '../Hooks/useAuth.js'
import SingleTask from './SingleTask.jsx'

const GET_TASK_URL = '/task/get'
const GET_TASK_FILTER_STATUS_URL = '/task/filter/status'


const TaskList = ({ tasks, setTasks, fillteredStatus }) => {

    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [error, setError] = useState(false)

    const auth = useAuth().auth
    const token = auth.accessToken

    const getTasks = async () => {
        try {
            const res = await axios.get(GET_TASK_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            // res.data.message ? setError(true) : setError(false)
            setTasks(res.data)

        } catch (error) {

            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        getTasks()

    }, [tasks])



    const filterTask = async () => {
        try {
            const res = await axios.get(GET_TASK_FILTER_STATUS_URL + `/${fillteredStatus}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            setError(null)
            setTasks(res.data)

        } catch (error) {
            if (error.response.status == 404) {
                setError(error.response.data)
            }


        }
    }
    useEffect(() => {

        if (fillteredStatus == 'all') {
            // Initialize Error to be null 
            setError(null)
            getTasks()
        } else {
            filterTask()

        }

    }, [fillteredStatus])


    return (
        <Box display='flex' mt={2} justifyContent='space-evenly'>
            {error && (<>
                <h2>No tasks found</h2>
                {tasks.length == 0 ? 'Create your first task' : ''}
            </>

            )}
            <Grid display='flex' flexDirection='column' >
                {!error && tasks && tasks.map((task) => {
                    return (
                        <SingleTask {...task} key={task._id} />
                    )
                })}
            </Grid>

        </Box >
    )
}

export default TaskList