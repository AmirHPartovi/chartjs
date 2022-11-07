import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import React from 'react'

type Props = {}

const Total = (props: Props) => {
  return (
    <Grid alignItems={'center'} container item xs={12} md={4} bgcolor={'secondary.light'}p={1}borderRadius={2} my={2} >
        <Grid item xs ={6}>
            <Typography>
                موجودی
            </Typography>
        </Grid>
        <Grid display={'flex'} item xs ={6}>
            <Typography>
                1300 تومان
            </Typography>
        </Grid>
    </Grid>
  )
}

export default Total