import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import Header from '../Components/AddMoney/Header'
import AddMoneyForm from '../Components/AddMoney/AddMoneyForm'
type Props = {}

const AddMoney = (props: Props) => {
  return (
    <Grid container p={2}>
        <Header/>
        <AddMoneyForm/>
    </Grid>
  )
}

export default AddMoney