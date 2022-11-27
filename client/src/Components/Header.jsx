import { AppBar, Box, Container, Grid, styled, Toolbar, Typography, Link } from '@mui/material'
import React from 'react'

const Title = styled('h2')`
color: #ff0899`

const Header = () => {
    return (
        <>
            <AppBar position='static'>
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Typography >ToDo LIST</Typography>
                        <Box sx={{ display: 'flex', justifyItems: 'end' }}>
                            <Typography >Welcome, USER! </Typography>
                            <Link href='#' sx={{ color: 'black' }}>Logout</Link>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>
        </>
    )
}

export default Header