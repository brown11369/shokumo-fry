import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usersign from './pages/Usersign';
import Restaurantsign from './pages/Restaurantsign';
import Restaurants from './pages/Restaurants';
import Dashboard from './pages/Dashboard';
import Restrict from './components/Restrict';
import Overview from './components/Overview';
import Add from './components/Add';
import Action from './components/Action';
import User from './components/User';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Account from './pages/Account';
import Foodcard from './components/Foodcard';
import RestOrder from './pages/RestOrder';


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Error />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user-sign' element={<Usersign />}></Route>
          <Route path='/restaurant-sign' element={<Restaurantsign />}></Route>
          <Route path='/restaurants' element={<Restaurants />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/foods' element={<Foodcard />}></Route>
          <Route path='/dashboard' element={
            <Restrict>
              <Dashboard />
            </Restrict>
          }>
            <Route path='/dashboard/overview' element={<Overview />} />
            <Route path='/dashboard/add' element={<Add />} />
            <Route path='/dashboard/action' element={<Action />} />
            <Route path='/dashboard/user' element={<User />} />
            <Route path='/dashboard/order' element={<RestOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
