import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <>
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </main>
      </div>
    </>
  )
}

export default App
