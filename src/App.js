import logo from './logo.svg';
import './App.css';
import Home from './Page-Container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Page-Container/About/About';
import Checkout from './Page-Container/Checkout/Checkout';
import Login from './Page-Container/Log-in/Login';
import Signup from './Page-Container/Sign-Up/Signup';
import Require from './Page-Container/Log-in/Login'
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Require>
          <Checkout></Checkout>
        </Require>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
