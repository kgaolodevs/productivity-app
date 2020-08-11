import React from "react";

const Item = ({ id, item, deleteItem }) => {
  return (
    <li className="list-group-item  m-2 font-weight-light display-4" key={id}>
      <p>{item}</p>
      <div className="list__buttons">
        <button className="delete btn btn-success list__buttons--done">
          <i className="fa fa-check-circle"></i>
        </button>
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
