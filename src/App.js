import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
}