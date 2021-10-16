import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import NewsContainer from './components/newsComponent/NewsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageNotFound from './components/search/PageNotFound';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  apikey = "19aef656c5684602b22af48af564a43f"
  // apikey = process.env.APIKEY
  constructor() {
    super();
    // Setting of state initially
    this.state = {
      articles: [],
      pageNumber: 1,
      NoOfArticles: 0,
      loading: true,
      progress: 0
    }

  }

  setProgress = (progress) => {
    this.setState({ progress: this.state.progress + progress })
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({ progress: 0 })}
          />
          <Switch>
            <Route exact path="/" key="home" >
              <Navbar title="GramoNews" active="home" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="general" />
            </Route>
            <Route exact path="/science" key="science" >
              <Navbar title="GramoNews" active="science" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="science" />
            </Route>
            <Route exact path="/technology" key="technology" >
              <Navbar title="GramoNews" active="technology" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="technology" />
            </Route>
            <Route exact path="/entertainment" key="entertainment" >
              <Navbar title="GramoNews" active="entertainment" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="entertainment" />
            </Route>
            <Route exact path="/sports" key="sports" >
              <Navbar title="GramoNews" active="sports" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="sports" />
            </Route>
            <Route exact path="/business" key="business" >
              <Navbar title="GramoNews" active="business" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="business" />
            </Route>
            <Route exact path="/health" key="health" >
              <Navbar title="GramoNews" active="health" />
              <NewsContainer setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="in" category="health" />
            </Route>
            <Route exact path="/pageNotFound" key="pageNotFound" >
              < PageNotFound />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
