import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Registration from '../pages/Registration/index';
import AddressRegistration from '../pages/AddressRegistration/index';
import RestaurantDetails from '../pages/RestaurantDetails/index';
import Cart from '../pages/Cart/index';
import Profile from '../pages/Profile/index'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path = '/' element = {<Home/>}/>
                <Route index path = '/signin'element = {<Login/>}/>
                <Route index path = '/signup' element= {<Registration/>}/>
                <Route index path = '/signup/address' element = {<AddressRegistration/>}/>
                <Route index path = '/restaurants/:id' element = {<RestaurantDetails/>}/>
                <Route index path = '/cart'element = {<Cart/>}/>
                <Route index path = '/profile'element = {<Profile/>}/>
            </Routes>
        </BrowserRouter>
)
}
export default Rotas