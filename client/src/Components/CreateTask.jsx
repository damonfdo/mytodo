import { Box, Grid, TextField, ToggleButtonGroup, ToggleButton, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from '../api/axios'
import FileBase from 'react-file-base64'
import useAuth from '../Hooks/useAuth'

const CREATE_TASK_URL = '/task/create'


const CreateTask = ({ status }) => {

    const [statusVal, setStatusVal] = useState('web')
    const [input, setInput] = useState({
        name: '',
        desc: '',
        attachment: '',
        statusId: statusVal
    })

    const auth = useAuth().auth
    const token = auth.accessToken

    const handleStatus = ((e) => {
        setStatusVal(e.target.value)
        setInput((prevState) => ({
            ...prevState,
            statusId: e.target.value
        }))

    })



    // Bind input values to state 
    const handleChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleFile = ((e) => {

        setInput((prevState) => ({
            ...prevState,
            attachment: e.target.files[0]
        }))
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post(CREATE_TASK_URL, input, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        })


    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" >
            <Grid container>
                <Typography>Add a task</Typography>
            </Grid>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'
                margin='auto'
                marginTop={3}
                padding={2}
                maxWidth={{ sm: '700px' }}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
            >


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center' >
                    <Grid item xs={12} sm={8}>
                        <TextField
                            name='name'
                            value={input.name}
                            onChange={handleChange}
                            margin='normal'
                            variant='outlined'
                            placeholder='Task Name'
                            type='text'
                            fullWidth
                            required
                        ></TextField>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <TextField
                            name='attachment'
                            // value={input.attachment}
                            onChange={handleFile}
                            margin='normal'
                            variant='outlined'
                            type='file'
                            fullWidth
                            inputProps={{ accept: 'image/png' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name='desc' value={input.desc} onChange={handleChange} margin='normal' variant='outlined' placeholder='Task Description' type='text' multiline fullWidth rows={4} required
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ToggleButtonGroup color="primary"
                            name="statusId" value={input.statusId}
                            exclusive onChange={handleStatus}
                            fullWidth
                        // onChange={handleChange} 
                        >

                            {status && status.map((item) => (
                                <ToggleButton value={item._id} key={item._id}>{item.name}</ToggleButton>
                            ))}

                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={6} sm={2} sx={{ alignItems: 'center' }}>
                        <Button type='submit' variant="contained">Create</Button>
                    </Grid>
                </Grid>



            </Box>
        </form>
    )
}

export default CreateTask