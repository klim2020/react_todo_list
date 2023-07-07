import PropTypes from "prop-types";
Stats.propTypes = {
  todoLists: PropTypes.array.isRequired,
};
export default function Stats({ todoLists }) {
  const numItems = todoLists.length;
  const completedTasksCount = todoLists.filter((val) => val.done).length;
  const totalitemsNeeded = todoLists.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.items.length;
  }, 0);
  return (
    <div>
      <p className="text-primary-content">
        You have {numItems} tasks total, You have completed{" "}
        {completedTasksCount} {completedTasksCount == 1 ? `task` : `tasks`}
      </p>
      <p>Total Items is {totalitemsNeeded}</p>
    </div>
  );
}
