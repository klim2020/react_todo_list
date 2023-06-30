import PropTypes from "prop-types";
import { useState } from "react";

Task.propTypes = {
  task: PropTypes.object.isRequired,
  thekey: PropTypes.number.isRequired,
  onListChange: PropTypes.func.isRequired,
};

export default function Task({ task, thekey, onListChange }) {
  const [opened, setOpened] = useState(true);
  const [completed, setCompleted] = useState(task.done);

  return (
    opened && (
      <div
        className="collapse bg-base-200 m-4"
        style={{ flex: "0 0 30%", alignSelf: "flex-start" }}
      >
        <div className="absolute right-10 top-1 z-10">
          <input
            id={`taskchecker${thekey}`}
            type="checkbox"
            className="toggle toggle-success task-checker"
            onChange={() => {
              setCompleted((current) => !current);
              onListChange((current) => {
                return current.map((element, index) => {
                  if (index != thekey) {
                    element.done = !element.done;
                  }
                  return element;
                });
              });
            }}
            checked={completed}
          />
        </div>
        <button
          className="btn btn-square btn-sm absolute right-0 z-10"
          onClick={() => {
            setOpened((val) => {
              return !val;
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <input type="checkbox" />
        <div
          className={`collapse-title text-xl font-medium text-primary-content ${
            completed ? "text-gray-400 line-through" : ""
          }`}
        >
          {task.title}
        </div>
        <div className="collapse-content">
          <p className="text-primary-content">{task.description}</p>
          <ul className="list-disc p-4  divide-y">
            <p className="text-primary-content font-bold">Items Needed</p>
            {task.items.map((item, index) => (
              <li className="p-2" key={index}>
                {" "}
                {item}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
