import React, { Component } from "react";

const InputField = () => {
  return (
    <div className="input-group mb-3 input-group-lg">
      <input type="text" className="form-control" placeholder="Add item.." />
      <div className="input-group-append">
        <button className="btn btn-success" type="button">
          Add
        </button>
      </div>
    </div>
  );
};

export default InputField;
