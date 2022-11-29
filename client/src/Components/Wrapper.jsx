import { Grid } from '@mui/material'
import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <Grid display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            {children}

        </Grid>
    )
}

export default Wrapper