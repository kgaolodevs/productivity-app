import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../src/css/main.css";
import InputField from "./components/Input Field/InputField";
import Item from "./components/Item/Item";

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

  deleteItem = (listItem) => {
    tempData.items = tempData.items.filter((item) => item !== listItem);
    this.setState({ items: tempData.items });
  };

  storeItem = (itemName) => {
    tempData.itemName = itemName;
  };

  generateListItem = (item) => {
    if (item === "") return;

    return <Item deleteItem={this.deleteItem} id={tempData.ID()} item={item} />;
  };

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
