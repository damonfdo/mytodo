import { Grid } from '@mui/material'
import React from 'react'
import useAuth from '../Hooks/useAuth.js'
import useRedirectPublic from '../Hooks/useRedirectPublic.js'

const Wrapper = ({ children }) => {

    const auth = useAuth()
    useRedirectPublic({ auth })
    return (
        <Grid display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            {children}

        </Grid>
    )
}

export default Wrapper