import Header from './components/Header';
import './App.css';
import LandingPage from './LandingPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <Header className="App-header"> */}
        <LandingPage />
       <AboutUs />
      {/* </Header> */}
    </div>
  );
}

export default App;
