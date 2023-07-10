import PropTypes from "prop-types";
import { useState } from "react";
FilterForm.propTypes = {
  onFilterBy: PropTypes.func.isRequired,
};
export default function FilterForm({ onFilterBy }) {
  const [filter, changeFilter] = useState("name");
  function onChange(e) {
    let value = e.target.value;
    changeFilter(value);
    onFilterBy(filter);
  }
  return (
    <div className="rounded bg-base-200 p-4">
      <h2 className="text-center my-2  text-primary-content font-bold">
        Filter values
      </h2>
      <form className="flex flex-row justify-around align-baseline">
        <div className="flex flex-row align-baseline self-center">
          <select
            className="select select-bordered w-full max-w-xs text-primary-content"
            onChange={onChange}
          >
            <option selected value="name">
              By name
            </option>
            <option value="items">By item number</option>
          </select>
        </div>
      </form>
    </div>
  );
}
