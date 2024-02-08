import { Box } from '@mui/material'
import React from 'react'

const MainWarpper = ({ children }) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {children}
    </Box>
  )
}

export default MainWarpper