import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../src/css/main.css";
import InputField from "./components/Input Field/InputField";

const App = () => {
  return (
    <div className="container appContainer">
      <InputField />
    </div>
  );
};

export default App;
