import { Box, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Index = () => {
    return (
        <>
            <Container maxWidth='xs'>
                <CssBaseline />
                <SignIn />

            </Container>
        </>
    )
}

export default Index