import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, CssBaseline, Grid, List, useTheme } from '@mui/material';
import { Auth, CreateTask, Header, Nav, TaskList } from './Components';
import useAuth from './Hooks/useAuth';
import { theme } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './Components/Wrapper';



function App() {

  // Global Status 
  const [status, setStatus] = useState()
  const [tasks, setTasks] = useState()
  const [filterredData, setFillteredData] = useState()
  const [fillteredStatus, setFillteredStatus] = useState()

  const Theme = useTheme()





  // console.log(theme)

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/app' element={
          <Wrapper>
            <Header />
            <Nav setTasks={setTasks} status={status} setStatus={setStatus} fillteredStatus={fillteredStatus} setFillteredStatus={setFillteredStatus} />
            <Grid alignItems='center' justifyContent='center'
              // margin='auto'
              marginTop={3}
              padding={4}
            >
              <CreateTask status={status} />
              <TaskList tasks={tasks} setTasks={setTasks} fillteredStatus={fillteredStatus} />
            </Grid>
          </Wrapper>

        } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
