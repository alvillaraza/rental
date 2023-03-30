import Header from './components/Header';
import './App.css';
import LandingPage from './LandingPage';
import AboutUs from './components/AboutUs';
import Amenities from './components/Amenities';

function App() {
  return (
    <div className="App">
      {/* <Header className="App-header"> */}
        <LandingPage />
       <AboutUs />
       <Amenities />
      {/* </Header> */}
    </div>
  );
}

export default App;
