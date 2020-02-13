import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Header />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
