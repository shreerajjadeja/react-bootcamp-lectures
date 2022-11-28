import React from 'react';
import ReactDOM from 'react-dom/client'

const reactEl = React.createElement(
  "h1",
  { id: "heading" },
  "This is written using React"
);

const reactRoot = ReactDOM.createRoot(document.getElementById("react"));
reactRoot.render(reactEl);
