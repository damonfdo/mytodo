import { AppBar, Box, Container, Grid, styled, Toolbar, Typography, Link, Button } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const { setAuth } = useContext(AuthContext)

    const handleLogout = () => {
        setAuth({})
    }
    return (
        <>
            <AppBar position='static'>
                <Grid sx={{ padding: '0 20px ' }}>
                    <Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
                        <Typography >ToDo LIST</Typography>
                        <Button onClick={handleLogout} sx={{ color: '#fff', borderColor: "#fff" }} variant="outlined">Logout</Button>
                    </Toolbar>

                </Grid>
            </AppBar>
        </>
    )
}

export default Header