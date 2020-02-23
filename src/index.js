import React from "react";
import ReactDOM from "react-dom";

import App from './components/App';

import './index.scss';

function MainApp() {
  return (
    <div className="body">
      <App />
    </div>
  );
};

ReactDOM.render(<MainApp />, document.querySelector("#root"));
