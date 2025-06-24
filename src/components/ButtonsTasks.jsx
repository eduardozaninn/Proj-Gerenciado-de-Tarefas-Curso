

function ButtonsTasks(props) {
    return (
        <button
            onClick={props.onClick}
            className="bg-slate-700 text-white p-2 rounded-md ml-3 ease-in-out transform hover:scale-105"
        >
            {props.children}
        </button>
    );

}

export default ButtonsTasks;