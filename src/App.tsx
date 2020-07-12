import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { BackgroundAnimation } from './components/bg-animate';
import { BodySection, FooterSection, HeaderSection } from './containers';
import { Fabric } from '@fluentui/react'


function App() {
  return (
    <div>
      <BackgroundAnimation />
      <div className="App">
        <Fabric>
          <Router>
            <HeaderSection />
            <BodySection />
            <FooterSection />
          </Router>
        </Fabric>
      </div>
    </div>
  );
}

export default App;
