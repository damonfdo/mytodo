import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const Title = styled('h2')`
color: #ff0899`

const Header = () => {
    return (
        <>
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                        <Typography variant='h2' color="primary">Title</Typography>
                        <Title>TESt</Title>
                    </Grid>
                    <Grid item xs={4}>
                        Button
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Header