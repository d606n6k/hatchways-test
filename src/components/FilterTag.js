import React from "react";

function FilterTag(props) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
        </div>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          type="text"
          name="filterTag"
          className="form-control tag-filter"
          placeholder="Search by Tag"
          aria-label="Emlpoyee Name"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default FilterTag;