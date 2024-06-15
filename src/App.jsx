import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Items from './pages/Items';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ItemDetails from './pages/ItemDetails';
import Cart from './pages/Cart';
import Login from './pages/LoginRegister/Login';
import Register from './pages/LoginRegister/Register';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

//React.lazy , suspense

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='items' element={<Items />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
