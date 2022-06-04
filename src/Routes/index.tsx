import { Routes ,Route} from "react-router-dom"
import Bookings from "./Bookings"
import Home from "./Home"
import HomeContent from "./Home/HomeContent"
import HomeInfo from "./Home/HomeInfo"
import Login from "./Login"
import Register from "./Register"
import RegisterForm from "./Register/RegisterForm"
import Services from "./Services"
import AddServices from "./Services/AddServices"
import DeleteServices from "./Services/DeleteServices"
import UpdateServices from "./Services/UpdateServices"
import Profile from "./ShopPofile"
import CreateProfile from "./ShopPofile/CreateProfile"
import EditProfile from "./ShopPofile/EditProfile"

const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home />}>
          <Route index element={<HomeInfo/>}/>
          <Route path="/home" element={<HomeContent/>}/>
        </Route>
        <Route path="register" element={<Register/>}>
            <Route index element ={<RegisterForm/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="bookings" element = {<Bookings/>}/>
        <Route path='services' element={<Services/>}>
          <Route index element ={<AddServices/>}/>
          <Route path="update" element={<UpdateServices/>}/>
          <Route path= "delete" element={<DeleteServices/>}/>
        </Route>
        <Route path="profile" element={<Profile/>}>
          <Route index element={<CreateProfile/>}/>
          <Route path="edit" element={<EditProfile/>}/>
        </Route>
        
    </Routes>
  )
}

export default Router