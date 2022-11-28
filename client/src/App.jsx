import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, CssBaseline, Grid, List, useTheme } from '@mui/material';
import { Auth, Header, Nav, TaskList } from './Components';
import useAuth from './Hooks/useAuth';



function App() {

  const Theme = useTheme()

  const auth = useAuth();
  const isLoggedIn = auth.auth.accessToken ? true : false

  return (
    <>
      <CssBaseline />


      {!isLoggedIn ? <Auth /> :
        <Grid container >
          <Header />
          <Nav />
          <TaskList />
        </Grid>
      }

    </>

  )
}

export default App
