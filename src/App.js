import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";
import About from "./components/About";
import ProjectModal from "./components/ProjectModal";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Header />
      <main>
        <Route path="/work:id" component={ProjectModal} />
        <Route path="/" exact component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
