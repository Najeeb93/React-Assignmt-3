import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseEffect from './assets/UseEffect'
import { Box, Typography, Button} from '@mui/material'

function App() {
 

  return (
    <div className='container mx-auto'>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}
       bgcolor={'orange'} padding={1} color={'white'} marginTop={1} marginBottom={1} borderRadius={3}>
<Typography variant='h5'fontWeight={'medium'} sx={{textDecoration:'underline'}}>Image Gallery</Typography>
<Button variant='outlined'

>Login </Button></Box>
    </div>
  
  )
}

export default App
