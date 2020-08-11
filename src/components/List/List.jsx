import React from "react";

const List = ({ icon }) => {
  return (
    <ul className="list-group list">
      <li className="list-group-item  m-2 font-weight-light display-4">
        <p>Go to the gym</p>
        <div className="list__buttons">
          <button className="delete btn btn-success list__buttons--done">
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="delete btn btn-danger list__buttons--delete">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
};

export default List;
