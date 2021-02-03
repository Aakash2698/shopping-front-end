import React from "react";
import "./App.css";

import { RouteComponentProps, withRouter } from "react-router-dom";
import Header from "./Components/WrapperComponents/Header/Header";
import Home from "./Components/ContentComponents/Home/Home";
import Footer from "./Components/WrapperComponents/Footer/Footer";

class App extends React.Component<RouteComponentProps<any>> {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
