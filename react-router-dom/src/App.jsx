import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contect from './components/Contect.jsx'
import Services from './components/Services.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Services" element={<Services />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
