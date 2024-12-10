
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicePage from './pages/services/ServicePage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';
import Contact from './pages/Contact';
import APIDataPage from './pages/Api-Data';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:id" element={<ServiceDetailPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/api-data" element={<APIDataPage />} />
    </Routes>
    <Footer/>
  </Router>
);
