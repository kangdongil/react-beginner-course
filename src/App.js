import  { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(toDo === "") {
			return;
		}
		setToDo("");
		setToDos((prevArr) => [toDo, ...prevArr]);
	};
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="Write your ToDo"
				/>
				<button>Add ToDo</button>
			</form>
			<hr />
			<ul>
				{toDos.map(
					(toDo, index) => <li key={index}>{toDo}</li>
				)}
			</ul>
		</div>
	);
}

export default App;
