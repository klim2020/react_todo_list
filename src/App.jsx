import "./App.css";

import Header from "./components/Header";
import AddForm from "./components/Forms/AddForm";
import TaskList from "./components/Tasks/TasksList";
import FilterForm from "./components/Forms/FilterForm";
import Footer from "./components/Footer";
import data from "./service/listProvider";
import { useEffect, useState } from "react";

function App() {
  const [todoLists, changeTodoList] = useState(data);

  function onAddTask(task) {
    changeTodoList((taskList) => {
      return [...taskList, task];
    });
  }

  function onDeleteTask(index) {
    changeTodoList((taskList) => {
      return taskList.filter((val, key) => {
        return key != index;
      });
    });
  }

  function onToggleStatus(index) {
    changeTodoList((taskList) =>
      taskList.map((item, key) => {
        return key === index ? { ...item, done: !item.done } : item;
      })
    );
  }

  useEffect(() => {
    //TODO REMOVE DEBUG
    //console.log(todoLists);
  });
  return (
    <>
      <Header />
      <div className="body mx-auto h-full flex flex-col justify-between">
        <AddForm onAddTask={onAddTask} />
        <TaskList
          todoLists={todoLists}
          onDeleteItem={onDeleteTask}
          onToggleStatus={onToggleStatus}
        />
        <FilterForm />
      </div>

      <Footer todoLists={todoLists} />
    </>
  );
}

export default App;
