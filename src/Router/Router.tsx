import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AddMoney from '../Pages/AddMoney'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/addMoney',
        element:<AddMoney/>
    }
])

export default router