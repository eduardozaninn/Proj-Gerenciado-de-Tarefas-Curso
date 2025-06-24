import { useState } from "react";
import Input from "./Input";

function AddTasks({ OnAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 bg-slate-800 p-6 rounded-xl shadow-1xl mb-6 flex flex-col ">
      <h2 className="text-2xl font-bold text-white ml-2 mb-3">Add Tasks</h2>
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Please fill all fields");
          OnAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-sky-700 text-white p-2 rounded-md transition-transform duration-50 ease-in-out transform hover:scale-105"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTasks;
