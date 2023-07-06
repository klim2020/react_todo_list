import { useState } from "react";
import PropTypes from "prop-types";

AddForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
export default function AddForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescrition] = useState("");
  const [completed, setCompleted] = useState(false);
  const [items, setItems] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newItem = { title, description, items, done: completed };
    setCompleted(false);
    setTitle("");
    setDescrition("");
    setItems("");
    onAddTask(newItem);
  }

  return (
    <div className="rounded bg-base-200 my-4 p-4 ">
      <h2 className="text-center my-2 font-bold text-primary-content">
        Add a task
      </h2>
      <form
        className=" flex flex-row justify-around align-baseline"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row align-baseline self-center">
          <span className="label-text text-primary-content flex-grow self-center mx-2">
            Task name{" "}
          </span>
          <input
            value={title}
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xs text-primary-content"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <textarea
          value={description}
          onChange={(e) => {
            setDescrition(e.target.value);
          }}
          className="textarea textarea-primary text-primary-content"
          placeholder="Description"
          style={{ height: "3rem" }}
        ></textarea>
        <div className="flex flex-row align-baseline self-center">
          <span className="label-text text-primary-content flex-grow self-center mx-2">
            Ingradients[ENTER]{" "}
          </span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xs text-primary-content"
            value={items}
            onChange={(e) => {
              let items = e.target.value.split("|");
              setItems(items);
            }}
          />
        </div>
        <input
          type="checkbox"
          className="toggle toggle-success task-checker text-primary-content"
          checked={completed}
          onChange={(e) => {
            setCompleted(e.target.checked);
          }}
        />
        <button type="submit" className="btn btn-primary text-primary-content">
          Add
        </button>
      </form>
    </div>
  );
}
