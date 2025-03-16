import React from 'react';
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: auth</div>
    <div>Framework: react-19</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);