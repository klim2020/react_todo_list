import Task from "./Task";
import PropTypes from "prop-types";

TaskList.propTypes = {
  todoLists: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};
export default function TaskList({ todoLists, onDeleteItem, onToggleStatus }) {
  return (
    <div className="flex flex-row flex-wrap">
      {todoLists.map((item, key) => {
        return (
          <Task
            key={key}
            thekey={key}
            task={item}
            onDeleteItem={onDeleteItem}
            onToggleStatus={onToggleStatus}
          />
        );
      })}
    </div>
  );
}
