import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useContext } from 'react'
import AuthContext from '../../Context/AuthProvider'
import axios from '../../api/axios.js'
import { useEffect } from 'react'
import { useRef } from 'react'

const SIGNIN_URL = '/user/signin'
const SIGNUP_URL = '/user/signup'

const Authentication = () => {
    const errRef = useRef()

    const { setAuth } = useContext(AuthContext)
    const [isSignUp, setIsSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [success, setSuccess] = useState(false)


    // Bind input values to state 
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // reset from data 
    const resetForm = () => {
        setIsSignUp(!isSignUp)
        setInput({ name: "", email: "", password: "" })
    }

    // Send form data to API 
    const handleSubmit = async (event) => {
        event.preventDefault()
        // isSignUp ? console.log('Sign Up Success') : console.log('Sign In Success')

        try {
            const res = await axios.post(SIGNIN_URL, input, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })

            const accessToken = res?.data
            setAuth({ accessToken })
            //Rest Input values 
            setInput({ name: "", email: "", password: "" })

            setSuccess(true)

        } catch (error) {
            setSuccess(false)
            setErrorMessage(error.response.data.message)

        }
    }


    const btnStyle = {
        mt: 2
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <Box display='flex' flexDirection='column' maxWidth={400} alignItems='center' justifyContent='center'
                    margin='auto'
                    marginTop={3}
                    padding={4}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    <Typography variant='h4' padding={3} textAlign='center'>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Typography>
                    {isSignUp && (<TextField
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                        margin='normal'
                        variant='outlined'
                        placeholder='Name'
                        type='Name'
                        required
                    ></TextField>)
                    }

                    <TextField
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                        margin='normal'
                        variant='outlined'
                        placeholder='Email'
                        type='email'
                        required
                    ></TextField>
                    <TextField
                        name='password'
                        value={input.password}
                        onChange={handleChange}
                        margin='normal'
                        variant='outlined'
                        placeholder='Password'
                        type='password'
                        required
                    ></TextField>

                    <Button
                        type='submit'
                        variant='contained'
                        sx={btnStyle}
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Typography paddingTop={2}>
                        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
                    </Typography>
                    <Button onClick={resetForm}>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </Button>
                    {!success && (<Typography variant='p' color='red' border='1px' borderColor='red'>{errorMessage}</Typography>)}


                </Box>
            </form>

        </>
    )
}

export default Authentication