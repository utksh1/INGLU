import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Community from './pages/Community';
import About from './pages/About';
import Education from './pages/Education';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="community" element={<Community />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
      </Route>
    </Routes>
  )
}

export default App
