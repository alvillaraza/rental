import Header from './components/Header';
import './App.css';
import LandingPage from './LandingPage';
import AboutUs from './components/AboutUs';
import Amenities from './components/Amenities';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <AboutUs />
      <Amenities />
      <ContactUs />
    </div>
  );
}

export default App;
