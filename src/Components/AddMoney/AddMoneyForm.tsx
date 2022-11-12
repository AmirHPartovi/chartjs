import Grid from '@mui/material/Grid/Grid'
import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import {MoneyType} from '../../Model/MoneyType'

type Props = {}
// id , title ,price , type:'income' , 
const AddMoneyForm = (props: Props) => {
    const [disabled,setDisabled]=useState<boolean>(true)
    const AddMoneyFormOptions = [
        {id:1,value:'income',title:'دخل'},
        {id:2,value:'expense',title:'خرج'},
    ]
    const [form,setForm] =useState<MoneyType>({
        id:1,
        type:'income',
        title:'',
        price:''
    })
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form , [event.target.name]:event.target.value})

    }
    // useEffect(()=>{
    //     setDisabled(form.title === '' || form.price === 0 ? true : false)
    // },[])
  return (
    <Grid container item xs={12}>
        <Grid container item p={2} my={4} justifyContent={'center'}>
            <form style={{display:'flex', flexWrap:'wrap'}}>
            <Grid item xs={12} md={4}p={2}>
            <TextField name={'type'} onChange={handleChange} select value={form.type} fullWidth
                               label={'نوع دخل و خرج'} SelectProps={{native: true}}>
                        {AddMoneyFormOptions.map(o => (
                            <option key={o.id} value={o.value}>
                                {o.title}
                            </option>
                        ))}
                    </TextField>
            </Grid>
            <Grid item xs={12} md={4}p={2}>
            <TextField  onChange={handleChange} name='title' fullWidth value={form.title} label={'موضوع'}/>
            </Grid>
            <Grid item xs={12} md={4} p={2}>
            <TextField onChange={handleChange} type={'number'} name='price' fullWidth value={form.price} label={'مبلغ'}/>
            </Grid>
            <Grid xs={12}>
                    <Button fullWidth variant={'contained'}>
                            اضافه کردن دخل و خرج
                    </Button>
            </Grid>
            </form>
        </Grid>
    </Grid>
  )
}

export default AddMoneyForm