import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { BackgroundAnimation } from './components/bg-animate';
import { BodySection, FooterSection, HeaderSection } from './containers';


function App() {
  return (
    <div>
      <BackgroundAnimation />
      <div className="App">
        <Router>
          <HeaderSection />
          <BodySection />
          <FooterSection />
        </Router>
      </div>
    </div>
  );
}

export default App;
