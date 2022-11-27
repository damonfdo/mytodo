import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, CssBaseline, Grid, List, useTheme } from '@mui/material';
import { Auth, Header, Nav, TaskList } from './Components';



function App() {
  const [count, setCount] = useState(0)
  const Theme = useTheme()
  const isLoggedIn = true
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
