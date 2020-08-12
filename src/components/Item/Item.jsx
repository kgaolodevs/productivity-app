import React from "react";

const Item = ({ item, deleteItem, itemDone, itemClasses }) => {
  return (
    <li className="list-group-item  m-2 font-weight-light display-4">
      <p>{item}</p>
      <div className="list__buttons">
        <button
          className="delete btn btn-danger list__buttons--delete"
          onClick={() => deleteItem(item)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Item;
