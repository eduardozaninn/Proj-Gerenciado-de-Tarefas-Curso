import { CircleChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetailsOfATasks() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function BackBottonClick() {
    navigate(-1);
  }

  return (
    <div className="w-screen h-screen bg-sky-950 p-8">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={BackBottonClick}
            className="absolute left-0 top-0 bottom-0 text-white hover:text-sky-400"
          >
            <CircleChevronLeftIcon />
          </button>
          <h1 className="text-white text-3xl font-bold text-center mb-7 mt-6">
            Details of a Task
          </h1>
        </div>

        <div className="bg-sky-800 p-5 rounded-lg shadow-md mb-4 tex">
          <h2 className="text-white font-bold text-lg">{title}</h2>
          <p className="text-white text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsOfATasks;
