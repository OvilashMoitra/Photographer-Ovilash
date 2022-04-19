import './App.css';
import Home from './Page-Container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Page-Container/About/About';
import Checkout from './Page-Container/Checkout/Checkout';
import Login from './Page-Container/Log-in/Login';
import Signup from './Page-Container/Sign-Up/Signup';
import Require from './Page-Container/RequireAuth/Require'
import NotFound from './Page-Container/NotFound/NotFound';
import Blogs from './Page-Container/Blogs/Blogs';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="checkout" element={
          <Require>
            <Checkout></Checkout>
          </Require>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
