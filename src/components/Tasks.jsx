import { CheckCheckIcon, CheckIcon, ChevronRightIcon, ListCheckIcon, SquareCheckBigIcon, SquareCheckIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonsTasks from "./ButtonsTasks";

function Tasks({ tasks, OnTaskClick, OnDeleteTasks }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/tasks?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 bg-slate-800 p-6 rounded-xl shadow-1xl mb-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => OnTaskClick(task.id)}
            className={`bg-slate-700 text-white p-2 rounded-md text-left w-full flex items-center gap-4 transition-transform duration-600 ease-in-out transform hover:scale-105 ${task.isCompleted && "line-through"
              } `}
          >
            {task.isCompleted && <SquareCheckBigIcon/>}
            {task.title}
          </button>

          <ButtonsTasks
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-700 text-white p-2 rounded-md ml-5 ease-in-out transform hover:scale-105"
          >
            <ChevronRightIcon />
          </ButtonsTasks>

          <ButtonsTasks
            onClick={() => OnDeleteTasks(task.id)}
            className={`bg-slate-700 text-white p-2 rounded-md ml-3 transform hover:scale-105 ${task.isCompleted && "line-through"
              }`}
          >
            <Trash2Icon />
          </ButtonsTasks>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
