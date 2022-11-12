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
    <Grid container p={2} direction={'column'} alignItems={'space-around'}>
        <Header/>
        <Total/>
        <Grid container item xs={12} sx={{direction:{ xs: "column", md: "row"}}}>
          
            <MoneyCard backgroundColor={'success.light'} title={'درآمد ها'} icon={<TrendingUpIcon/>}type={'income'}/>
          
            <MoneyCard backgroundColor={'error.light'} title={'هزینه ها'} icon={<TrendingDownIcon/>}type={'expense'}/>
          
        </Grid>
    </Grid>

  )
}

export default Home