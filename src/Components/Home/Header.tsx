import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <Grid container item xs={12} bgcolor={'secondary.dark'}p={1}borderRadius={2} color={'#fff'}>
            <Grid item xs={6}>
                <Typography variant={'h5'}>
                    دخل و خرج
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Button variant='contained' sx={{bgcolor:"#fff" , color:'secondary.dark'}}>
                    <Typography >
                        دخل و خرج جدید
                    </Typography>
                </Button>
            </Grid>
    </Grid>
  )
}

export default Header