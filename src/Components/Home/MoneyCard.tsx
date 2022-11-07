import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography/Typography'
import React, { ReactNode } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface MoneyCardProps {
    backgroundColor:string,
    title:string,
    icon:ReactNode
}

const MoneyCard = ({backgroundColor,title,icon}: MoneyCardProps) => {
   
  return (
    <Grid item xs={12} md={4} my={2} bgcolor={backgroundColor} p={2} borderRadius={2} color={'#fff'}>
        <Grid item xs={12} container direction={'row'}>
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
        <Grid item xs={12} container direction={'row'} alignItems={'center'}>
            <Grid item xs={4}>
                <Typography>
                    موضوع
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    مبلغ
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <ModeEditIcon/>
                </IconButton>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MoneyCard