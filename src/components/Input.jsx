function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder || "Enter text"}
            className="border border-slate-600 bg-slate-700 text-white p-2 rounded-md outline-slate-700 "
            value={props.value}
            onChange={(e) => props.onChange(e)}

        />);


}

export default Input;