import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Community from './pages/Community';
import About from './pages/About';
import Education from './pages/Education';
import CuetBiology from './pages/education/CuetBiology';
import Membership from './pages/Membership';
import Careers from './pages/Careers';
import Shop from './pages/Shop';
import Account from './pages/Account';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="community" element={<Community />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="education/cuet-pyqs" element={<CuetBiology />} />
        <Route path="membership" element={<Membership />} />
        <Route path="careers" element={<Careers />} />
        <Route path="shop" element={<Shop />} />
        <Route path="account" element={<Account />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
