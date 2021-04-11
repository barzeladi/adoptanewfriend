import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, FosterHomes, Contact, Animals, Dogs, Cats, SignUp } from "./components";

import { ShowAnimal } from './components/Animals';

import Login from "./components/login.component";
// import SignUp from "./SignUp";


function App() {




  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/animals" exact component={() => <Animals type="All" />} />
          <Route path="/dogs" exact component={() => <Animals type="Dog" />} />
          <Route path="/cats" exact component={() => <Animals type="Cat" />} />
          <Route path="/animals/:id" exact component={() => <ShowAnimal />} />
          <Route path="/fosterhomes" exact component={() => <FosterHomes />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/sign-in" exact component={() => <Login />} />
          <Route path="/sign-up" exact component={() => <SignUp />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;