import { useEffect, useState } from "react";
import AddTaks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=6",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   }
  //   fetchTasks();
  // }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function OnTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function OnDeleteTasks(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  function OnAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6 ">
      <div className="w-[500px]">
        <h1 className="text-white text-3xl font-bold text-center mb-6 mt-6">
          Task Manager
        </h1>
        <AddTaks OnAddTaskSubmit={OnAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          OnTaskClick={OnTaskClick}
          OnDeleteTasks={OnDeleteTasks}
        />
      </div>
    </div>
  );
}

export default App;
