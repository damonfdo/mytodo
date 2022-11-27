import { Box, ButtonGroup, Grid, Button } from '@mui/material'
import React from 'react'

const Nav = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 2, padding: '0 40px' }}>
                {/* Top Section  */}
                <Grid item>
                    <Box>
                        Filter
                    </Box>

                </Grid>
                {/* Controls  */}
                <Grid>
                    <Box>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button>All</Button>
                            <Button>To DO</Button>
                            <Button>In Progress</Button>
                            <Button>Complete</Button>
                        </ButtonGroup>

                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default Nav