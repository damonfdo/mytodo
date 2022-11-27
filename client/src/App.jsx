import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, CssBaseline, Grid, useTheme } from '@mui/material';
import { Header } from './Components';



function App() {
  const [count, setCount] = useState(0)
  const Theme = useTheme()
  console.log(Theme)
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">

        <Header />
      </Container>
    </>

  )
}

export default App
