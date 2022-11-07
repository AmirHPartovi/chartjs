import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography/Typography'
import React, { ReactNode } from 'react'

interface MoneyCardProps {
    backgroundColor:string,
    title:string,
    icon:ReactNode
}

const MoneyCard = ({backgroundColor,title,icon}: MoneyCardProps) => {
  return (
    <Grid item xs={12} md={4} my={2} bgcolor={backgroundColor} p={2} borderRadius={2}>
        <Grid item xs={6}>
            <Typography>
                {title}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>
                {icon}
            </Typography>
        </Grid>
    </Grid>
  )
}

export default MoneyCard