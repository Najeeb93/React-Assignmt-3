import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseEffect from './assets/UseEffect'
import { Box, Typography} from '@mui/material'

function App() {
 

  return (
    <div className='container mx-auto'>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
       bgcolor={'orange'} padding={1} color={'white'} marginTop={1} marginBottom={1} borderRadius={3}>
<Typography variant='h4'>Learning Material UI</Typography></Box>
    </div>
  
  )
}

export default App
