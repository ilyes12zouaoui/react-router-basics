import React, { Component } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import BookPage from "./BookPage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import Header from "./Header";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/book" exa component={BookPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>

          {/* <HomePage />
        <BookPage />
        <AboutPage /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
