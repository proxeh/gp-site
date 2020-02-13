import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import BigBanner from './components/BigBanner';

import './index.css';

function App() {
  return (
    <div className="body">
      <Header />
      <BigBanner title="Welcome!" content="Welcome to the site" />
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
