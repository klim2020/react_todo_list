export default function TaskList() {
  return (
    <div className="flex flex-row flex-wrap">
      {todoLists.map((item, key) => {
        return <Task key={key} thekey={key} task={item} />;
      })}
    </div>
  );
}
