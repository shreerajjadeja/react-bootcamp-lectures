import React from "react";
import ReactDOM from "react-dom/client";
import teamLogo from "./assets/images/team-logo.png";

const reactEl = React.createElement(
  "h1",
  { id: "heading" },
  "This is written using React"
);

// Nested Elements using createElement
const nestedEl = React.createElement("div", { id: "main" }, [
  React.createElement(
    "h1",
    { id: "title" },
    React.createElement(
      "span",
      {},
      React.createElement("strong", {}, "React Bootcamp")
    )
  ),
  React.createElement("h2", {}, "from zero to Hero"),
  React.createElement("h3", {}, "in three months"),
]);

// Title Functional component
const TitleComponent = () => {
  return (
    <h1 className="title">
      <span>
        <strong>React Bootcamp</strong>
      </span>
    </h1>
  );
};

// JSX expressions assigned to variables
const DescComponent = <h2>from zero to Hero</h2>;
const numberOfMonths = 3;

// Nested Elements using JSX
const nestedElWithJSX = (
  <div id="main">
    <TitleComponent></TitleComponent>

    {DescComponent}
    <h3>in {numberOfMonths} months</h3>
  </div>
);

// Nested Elements using JSX + Functional component
const NestedElComponent = () => {
  return nestedElWithJSX;
};

// Creating Header Component from Scratch

const TeamLogoComponent = () => {
  return (
    <div>
      <img className="team-logo" src={teamLogo} alt="Team-Logo" />
    </div>
  );
};

const SearchBarComponent = () => {
  return (
    <div>
      <input type="search" className="search-bar" />
    </div>
  );
};

const UserIconComponent = () => {
  const userIcon = "https://img.icons8.com/bubbles/50/null/user.png";

  return (
    <div>
      <img src={userIcon} />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header className="header">
      <TeamLogoComponent />
      <SearchBarComponent />
      <UserIconComponent />
    </header>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("react"));
reactRoot.render(<HeaderComponent />);
