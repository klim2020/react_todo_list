import Task from "./Task";
import PropTypes from "prop-types";

TaskList.propTypes = {
  todoLists: PropTypes.array.isRequired,
  onListChange: PropTypes.func.isRequired,
};
export default function TaskList({ todoLists, onListChange }) {
  return (
    <div className="flex flex-row flex-wrap">
      {todoLists.map((item, key) => {
        return (
          <Task
            key={key}
            thekey={key}
            task={item}
            onListChange={onListChange}
          />
        );
      })}
    </div>
  );
}
