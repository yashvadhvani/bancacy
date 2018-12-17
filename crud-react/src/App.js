import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/user/Register";
import List from "./components/user/List";
import Update from "./components/user/Update";
import Delete from "./components/user/Delete";
import NotFound from "./components/common/NotFound.js"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />


            <div className="container">
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/update" component={Update} />
                <Route exact path="/list" component={List} />
                <Route exact path="/delete" component={Delete} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
