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

  function onFilterBy(filterBy) {
    if (filterBy === "items") {
      console.log("items");
      changeTodoList((c) => {
        let qq = [...c].sort((a, b) => {
          if (a.items.length < b.items.length) {
            return 1;
          }
          if (a.items.length > b.items.length) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
        console.log(qq);
        return qq;
      });
    }
    if (filterBy === "name") {
      console.log("name");
      changeTodoList((c) => {
        return [...c].sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
      });
    }
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
        <FilterForm onFilterBy={onFilterBy} />
      </div>

      <Footer todoLists={todoLists} />
    </>
  );
}

export default App;
