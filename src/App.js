import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../src/css/main.css";
import InputField from "./components/Input Field/InputField";
import List from "./components/List/List";

const App = () => {
  return (
    <div className="container appContainer">
      <h1 className="appContainer__title">PRODUCTIVITY APP</h1>
      <InputField />
      <List />
    </div>
  );
};

export default App;
