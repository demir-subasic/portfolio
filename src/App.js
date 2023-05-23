import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HeroSection from './components/hero-section/hero-section';
import About from './components/about-section/about';
import Contact from './components/contact-section/contact';
import Works from './components/works-section/works';
import Navbar from './components/hero-section/navbar/navbar';

function App() {
  return (
  <div>

    <Routes>
      <Route path='/' element={<HeroSection />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/works' element = {<Works />}/>
    </Routes>
  </div>
  )
}

export default App;
