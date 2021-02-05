import React from 'react'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import ResourceInner from './pages/ResourceInner'
import Resources from './pages/Resources'
import WhoWeAre from './pages/WhoWeAre'
import PrivacyPolicy from './pages/PrivacyPolicy'
import GeneralCollege from './pages/GeneralCollege'
import GeneralLone from './pages/GeneralLone'
import Faq from './pages/Faq'
import Tarms from './pages/Tarms'
import OurValus from './pages/OurValus'
import Community from './pages/Community'
import ContactUs from './pages/ContactUs'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
render(){
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/resource_inner" component={ResourceInner} />
            <Route path="/resources" component={Resources} />
            <Route path="/who_we_are" component={WhoWeAre} />
            <Route path="/privacy_policy" component={PrivacyPolicy} />
            <Route path="/general_college" component={GeneralCollege} />
            <Route path="/general_lone" component={GeneralLone} />
            <Route path="/faq" component={Faq} />
            <Route path="/tarms" component={Tarms} />
            <Route path="/our_valus" component={OurValus} />
            <Route path="/community" component={Community} />
            <Route path="/contact_us" component={ContactUs} />
            <Route path="*">
              <div>404 not found....</div>
            </Route>
          </Switch>
        </Router>
      </main>
    )  
}
  
}


