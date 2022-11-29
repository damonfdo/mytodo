import { useEffect, useState } from 'react'
import axios from '../api/axios.js'
import { Box, ButtonGroup, Grid, Button, Typography, Modal, TextField } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// Date Picker 
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useAuth from '../Hooks/useAuth.js';


//API URL
const STATUS_URL = '/status'
const DATE_FILTER_URL = '/task/filter/date/'

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
}
const datePicker = {
    margin: '1em 0',
}
const Nav = ({ setTasks, status, setStatus, fillteredStatus, setFillteredStatus }) => {

    const [open, setOpen] = useState()
    const [from, setFromValue] = useState()
    const [to, setToValue] = useState()


    const auth = useAuth().auth
    const token = auth.accessToken

    // Call to fetch available status 
    const getStatus = async () => {
        try {
            const res = await axios.get(STATUS_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            setStatus(res.data)

            return
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getStatus()
    }, [])


    const handleModal = () => setOpen(!open)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let fromDate = new Date(from).toISOString()
        let toDate = new Date(to).toISOString()
        const body = {

            'fromDate': fromDate,
            'toDate': toDate

        }

        try {
            const res = await axios.post(DATE_FILTER_URL, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })

            setTasks(res.data)
            setOpen(!open)
            return
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, padding: '0 40px' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {/* Top Section  */}
                <Grid item sx={2}>
                    <Box>
                        <Button onClick={handleModal}><FilterAltIcon /></Button>
                    </Box>

                </Grid>
                {/* Controls  */}
                <Grid sx={5}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button data-status-id={'all'} onClick={(e) => (setFillteredStatus(e.target.getAttribute("data-status-id")))}>All</Button>
                            {status && status.map((item) => (
                                <Button key={item._id} data-status-id={item._id} onClick={(e) => (setFillteredStatus(e.target.getAttribute("data-status-id")))}>{item.name}</Button>
                            ))
                            }
                        </ButtonGroup>

                    </Box>

                </Grid>

                {/* Date Filter Modal  */}
                <Modal open={open} onClose={handleModal}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={style}>
                            <Typography> Select Date Range</Typography>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <div style={datePicker}>
                                    <DatePicker
                                        label="From"
                                        value={from}
                                        onChange={(newValue) => {
                                            setFromValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}

                                    />
                                </div>
                                <div style={datePicker}>
                                    <DatePicker

                                        label="to"
                                        value={to}
                                        onChange={(newValue) => {
                                            setToValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}

                                    />
                                </div>

                            </LocalizationProvider>
                            <Button type='submit'>Submit</Button>
                        </Box>
                    </form>
                </Modal>
            </Grid>
        </>
    )
}

export default Nav