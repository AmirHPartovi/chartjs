import Grid from '@mui/material/Grid/Grid'
import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import {MoneyType} from '../../Model/MoneyType'

type Props = {}
// id , title ,price , type:'income' , 
const AddMoneyForm = (props: Props) => {

    const AddMoneyFormOption = [
        {id:1,value:'income',title:'دخل'},
        {id:2,value:'expense',title:'خرج'},
    ]
    const [form,setForm] =useState<MoneyType>({
        id:1,
        type:'income',
        title:'',
        price:0
    })
  return (
    <Grid container item xs={12}>
        <Grid container item p={2}>
            <Grid item xs={12} md={4}p={2}>
            <TextField select value={form.type} fullWidth label={'نوع دخل و خرج'}>
                {AddMoneyFormOption.map( o=>(
                    <option key={o.id} value={o.value} label={o.title}/>
                ))}
                
            </TextField>
            </Grid>
            <Grid item xs={12} md={4}p={2}>
            <TextField fullWidth value={form.title} label={'موضوع'}/>
            </Grid>
            <Grid item xs={12} md={4} p={2}>
            <TextField fullWidth value={form.price} label={'مبلغ'}/>
            </Grid>
            <Grid xs={12}>
                    <Button fullWidth variant={'contained'}>
                            اضافه کردن دخل و خرج
                    </Button>
            </Grid>
            
        </Grid>
    </Grid>
  )
}

export default AddMoneyForm