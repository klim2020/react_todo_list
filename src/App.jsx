import { useEffect, useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

const todoLists = [
  {
    title: "Clean a mess in my room",
    description:
      "It is urgently needed to clean my room with a wet cleaning and a broom",
    items: ["broom 🧹 ", "wet doormat 💦 "],
    done: false,
  },
  {
    title: "Learn React ",
    description:
      "In order to find a job as a React developer I need to learn React very good",
    items: ["brain 🧠 ", "Laptop 💻"],
    done: false,
  },
  {
    title: "Hang with friends at Sunday",
    description:
      "In order to be a social person I have to hang with my friends on a vacations, I think we could drink a beer",
    items: ["beer 🍺 ", "friends 🧑‍🤝‍🧑 🥳 🎉"],
    done: true,
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="body mx-auto">
        <AddForm />
        <TaskList name="" description="" />
        <FilterForm />
      </div>

      <Footer />
    </>
  );
}

function Logo() {
  return (
    <a className="btn btn-ghost normal-case text-xl">
      Todo List
      <img src="/checklist.webp" alt="" />
    </a>
  );
}

function TaskList() {
  return (
    <div className="flex flex-row flex-wrap">
      {todoLists.map((item, key) => {
        return <Task key={key} thekey={key} task={item} />;
      })}
    </div>
  );
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
    if (theme === "mythemedark") {
      document.querySelector("#themeswitcher").checked = true;
    } else {
      document.querySelector("#themeswitcher").checked = false;
    }
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme(() => "mythemedark");
    } else {
      setTheme(() => "mytheme");
    }
  };
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input id="themeswitcher" type="checkbox" onChange={handleToggle} />

      {/* sun icon */}
      <svg
        className="swap-on fill-current w-5 h-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-off fill-current w-5 h-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}

function Header() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content w-100 justify-around px-4">
        <Logo />
        <ul className="menu menu-horizontal bg-base-200 rounded-box ">
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function AddForm() {
  return (
    <div className="rounded bg-base-200 my-4 p-4 ">
      <h2 className="text-center my-2 font-bold text-primary-content">
        Add a task
      </h2>
      <form className=" flex flex-row justify-around align-baseline">
        <div className="flex flex-row align-baseline self-center">
          <span className="label-text text-primary-content flex-grow self-center mx-2">
            Task name{" "}
          </span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xs"
          />
        </div>

        <textarea
          className="textarea textarea-primary"
          placeholder="Description"
          style={{ height: "3rem" }}
        ></textarea>

        <button type="submit" className="btn btn-primary text-primary-content">
          Add
        </button>
      </form>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  thekey: PropTypes.number.isRequired,
};
function Task({ task, thekey }) {
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

function FilterForm() {
  return (
    <div className="rounded bg-base-200 my-4 p-4 justify-self-end">
      <h2 className="text-center my-2  text-primary-content font-bold">
        Filter values
      </h2>
      <form className=" flex flex-row justify-around align-baseline">
        <div className="flex flex-row align-baseline self-center">
          <select className="select select-bordered w-full max-w-xs text-primary-content">
            <option disabled selected>
              sort By
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="justify-self-end flex flex-col justify-center bg-primary items-center">
      <Stats />

      <p className="text-primary-content">
        &copy; 2015 Klim Mansurov <a href="http://klim.ml">klim.ml</a>
      </p>
    </footer>
  );
}

function Stats() {
  return (
    <div>
      <p className="text-primary-content">Here we will have a statistics</p>
    </div>
  );
}

export default App;
