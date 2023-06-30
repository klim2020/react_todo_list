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
  useEffect(() => {
    console.log(todoLists);
  });
  return (
    <>
      <Header />
      <div className="body mx-auto">
        <AddForm />
        <TaskList todoLists={todoLists} onListChange={changeTodoList} />
        <FilterForm />
      </div>

      <Footer />
    </>
  );
}

export default App;
