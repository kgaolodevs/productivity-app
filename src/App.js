import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../src/css/main.css";
import InputField from "./components/Input Field/InputField";

const tempData = {
  items: [],
  itemName: "",
  ID: function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
};

class App extends Component {
  state = { items: [] };

  addItem = (e) => {
    tempData.items.push(tempData.itemName);
    this.setState({ items: tempData.items });
  };

  storeItem = (itemName) => {
    tempData.itemName = itemName;
  };

  generateListItem(item) {
    return (
      <li
        className="list-group-item  m-2 font-weight-light display-4"
        key={tempData.ID()}
      >
        <p>{item}</p>
        <div className="list__buttons">
          <button className="delete btn btn-success list__buttons--done">
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="delete btn btn-danger list__buttons--delete">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="container appContainer">
        <h1 className="appContainer__title">PRODUCTIVITY APP</h1>
        <InputField addListItem={this.addItem} textInput={this.storeItem} />
        <ul className="list-group list">
          {this.state.items.map((item) => {
            return this.generateListItem(item);
          })}
        </ul>
        ;
      </div>
    );
  }
}

export default App;
