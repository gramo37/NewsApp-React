import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/navbar/Navbar'
import NewsContainer from './components/newsComponent/NewsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  // static propTypes = {

  // }
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" key="home" >
              <Navbar title="GramoNews" active="home" />
              <NewsContainer pageSize={12} country="in" category="general" />
            </Route>
            <Route exact path="/science" key="science" >
              <Navbar title="GramoNews" active="science" />
              <NewsContainer pageSize={12} country="in" category="science" />
            </Route>
            <Route exact path="/technology" key="technology" >
              <Navbar title="GramoNews" active="technology" />
              <NewsContainer pageSize={12} country="in" category="technology" />
            </Route>
            <Route exact path="/entertainment" key="entertainment" >
              <Navbar title="GramoNews" active="entertainment" />
              <NewsContainer pageSize={12} country="in" category="entertainment" />
            </Route>
            <Route exact path="/sports" key="sports" >
              <Navbar title="GramoNews" active="sports" />
              <NewsContainer pageSize={12} country="in" category="sports" />
            </Route>
            <Route exact path="/business" key="business" >
              <Navbar title="GramoNews" active="business" />
              <NewsContainer pageSize={12} country="in" category="business" />
            </Route>
            <Route exact path="/health" key="health" >
              <Navbar title="GramoNews" active="health" />
              <NewsContainer pageSize={12} country="in" category="health" />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
