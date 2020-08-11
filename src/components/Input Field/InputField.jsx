import React from "react";

const InputField = ({ addListItem, textInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addListItem();
  };

  return (
    <form className="input-group mb-3 input-group-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Add item.."
        onChange={(e) => textInput(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
