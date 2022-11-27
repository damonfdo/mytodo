import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material'

const SignIn = () => {
    return (
        <>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography>Sign In</Typography>

            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name='name'
                            required
                            id='name'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name='password'
                            type='password'
                            required
                            id='password'
                            autoFocus
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="containted"
                    sx={{ mt: 3, mb: 2 }}
                >Sign In

                </Button>
                <Grid container justifyContent='flex-center'>
                    <Grid item>
                        <Link href="#signup" >Already have an account? Sign In</Link>
                    </Grid>
                </Grid>
            </Box></>
    )
}

export default SignIn