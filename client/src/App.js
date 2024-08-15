import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
