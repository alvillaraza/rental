import Header from './components/Header';
import './App.css';
import LandingPage from './LandingPage';
import AboutUs from './components/AboutUs';
import Amenities from './components/Amenities';
import ContactUs from './components/ContactUs';
import Tours from './components/Tours';
import PartnerWithUs from './components/PartnerWithUs';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <AboutUs />
      <Amenities />
      <Tours />
      <PartnerWithUs />
      <ContactUs />
    </div>
  );
}

export default App;
