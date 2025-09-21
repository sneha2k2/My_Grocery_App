import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';
import FruitsVeggies from './pages/FruitsVeggies';
import DairyEggs from './pages/DairyEggs';
import MeatSeafood from './pages/MeatSeafood';
import { CartProvider } from './context/CartContext.jsx';
import './styles/globals.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fruits-veggies" element={<FruitsVeggies />} />
            <Route path="/dairy-eggs" element={<DairyEggs />} />
            <Route path="/meat-seafood" element={<MeatSeafood />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
