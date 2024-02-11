import { Grid } from '@mui/material'
import React from 'react'

const CellWarpper = ({ children,styles ,...rest }) => {
    return (
        <Grid
            sx={{
                border: 1,
                minHeight: "50px",
                borderColor: (theme) => theme.palette.divider,
                minWidth:"50px",
                ...styles
            }}
            item
            {...rest}
        >{children}</Grid>
    )
}



export default CellWarpper