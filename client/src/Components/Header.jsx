import { AppBar, Box, Container, Grid, styled, Toolbar, Typography, Link, Button } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const { setAuth } = useContext(AuthContext)

    const handleLogout = () => {

        localStorage.clear();
        setAuth({})
        useNavigate("/")

    }
    return (
        <>
            <AppBar position='static'>
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Typography >ToDo LIST</Typography>
                        <Button color='info' onClick={handleLogout}>Logout</Button>
                    </Toolbar>

                </Container>
            </AppBar>
        </>
    )
}

export default Header