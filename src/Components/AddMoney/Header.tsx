import Button from '@mui/material/Button/Button'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Link} from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <Grid container item xs={12}  >
        <Grid item xs={6}>
            <Typography variant={'h5'}>
                اضافه کردن دخل و خرج ها
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Link to={'/'}>
            <Button variant='contained'>
                <Typography>
                بازگشت به صفحه اصلی

                </Typography>
            </Button>
            </Link>
        </Grid>
    </Grid>
  )
}

export default Header