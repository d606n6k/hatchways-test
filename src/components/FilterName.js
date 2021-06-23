import React from "react";

function FilterName(props) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
        </div>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          type="text"
          name="search"
          className="form-control"
          placeholder="Filter by Name"
          aria-label="Emlpoyee Name"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default FilterName;