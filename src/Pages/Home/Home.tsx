import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import Header from '../../Components/Home/Header'
import Total from '../../Components/Home/Total'
import MoneyCard from '../../Components/Home/MoneyCard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
type Props = {}

const Home = (props: Props) => {
  return (
    <Grid container p={2}>
        <Header/>
        <Total/>
        <MoneyCard backgroundColor={'success.light'} title={'هزینه ها'} icon={<TrendingUpIcon/>}/>
        <MoneyCard backgroundColor={'error.light'} title={'خرج ها'} icon={<TrendingDownIcon/>}/>
    </Grid>

  )
}

export default Home