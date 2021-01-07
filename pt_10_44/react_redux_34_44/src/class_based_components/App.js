import React, { Component } from 'react';
import Navbar from '../stateless_UI_components/Navbar';
import About from '../stateless_UI_components/About';
import Contact from '../stateless_UI_components/Contact';
import Post from './Post';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/*
- Any component added to the BrowserRouter class as a Route receives the RouteProps by default

- Here, the Home, About & Contact components receive such props autometically from the Route class

- Navbar does not as it's not specified inside <Route/>, even though it's inside the BrowserRouter tags

- Navbar can receive the RouteProps by using a higher-order component, which is a function that 
  enhances/adds more features to a particular component that's passed to it as an arg

- A higher-order component is utilized in Navbar.js 
*/
// how to define a Route parameter: <Route path='/:route param name' />
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/:post_id' component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
