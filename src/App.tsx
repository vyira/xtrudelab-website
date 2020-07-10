import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Urls } from './core/urls'

import {
  HomePage,
  AboutPage,
  ServicePage,
  ProductsPage,
  TermsAndConditionsPage,
  Page404
} from './pages'
import './App.scss';


function App() {
  return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to={Urls.home}>Home</Link></li>
              <li><Link to={Urls.products}>Products</Link></li>
              <li><Link to={Urls.services}>Services</Link></li>
              <li><Link to={Urls.about}>About</Link></li>
              <li><Link to={Urls.tc}>Terms &amp; Conditions</Link></li>
            </ul>
            <Switch>
              <Route exact path={Urls.home}>
                <HomePage />
              </Route>
              <Route path={Urls.products}>
                <ProductsPage />
              </Route>
              <Route path={Urls.services}>
                <ServicePage />
              </Route>
              <Route path={Urls.about}>
                <AboutPage />
              </Route>
              <Route path={Urls.tc}>
                <TermsAndConditionsPage />
              </Route>
              <Route path={Urls.noMatch}>
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
