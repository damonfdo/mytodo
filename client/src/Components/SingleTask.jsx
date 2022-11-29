import { Button, Card, CardActions, CardContent, CardMedia, Chip, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SingleTask = (data) => {


    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState({
        name: data.name,
        desc: data.desc,

    })
    const handleEdit = () => {
        setIsEdit(!isEdit)

    }
    // Bind input values to state 
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // const date = new Date(data.created_at)
    const date = data.created_at
    // console.log(date.toLocaleDateString("en-US"))

    return (
        <>
            <Card sx={{ margin: '10px' }}>
                {data.attachment && (

                    <CardMedia
                        component='img'
                        height="140"
                        image={`http://localhost:3000/uploads/${data.attachment}`}
                        alt='name'
                    />
                )}
                <CardContent>
                    <TextField id="filled-basic" variant="standard" value={input.name} onChange={handleChange} disabled={!isEdit} />
                    <TextField id="filled-basic" variant="standard" value={input.desc} onChange={handleChange} disabled={!isEdit} />

                    {/* <Typography variant="h5" gutterBottom component="div"> {data.name}</Typography> */}

                    <Chip label={data.status.name} variant='filled'></Chip>

                    <Typography>{date}</Typography>


                </CardContent>
                <CardActions>
                    <Button variant='outlined' onClick={handleEdit}>Edit</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default SingleTask