import React, { useState } from "react";


//create your first component
const Home = () => {

	//const [inputValue, setInputValue] = useState("");
	const [addTarea, setAddTarea] = useState([]);



	function listaTareas(e) {
		if (e.key === "Enter") {
			setAddTarea([...addTarea, e.target.value]);
			e.target.value = "";
		}
	}
	console.log(addTarea);

	const RemoveTodo = index => {
		const newTodos = [...addTarea];
		newTodos.splice(index, 1);
		setAddTarea(newTodos);
	};

	let tareaPendientes = "";
	if (addTarea.length == 0) {
		tareaPendientes = "No hay tarea pendientes "
	} else {
		tareaPendientes = "Tarea pendientes = ";
	}

	return (
		<div className="contenedor">
			<h1 className="text-center mt-5">To-do List</h1>
			<div className="contenedor-tareas">
				<div className="input-group mb-3">
					<input
						type="type"
						className="form-control"
						placeholder="Añadir Tarea"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						onKeyDown={listaTareas}
					/>
				</div>
				<div>
					<div className="list-group">
						<div>
							<ul>
								{addTarea.map((tarea, index) => (
									<li key={index}>
										{tarea}
										<a
											className="float-end"
											onClick={() => RemoveTodo(index)}>
											<i className="bi bi-x bg-primary text-white"></i>
										</a>

									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div>
					<h4 className="text-center">{tareaPendientes}{addTarea.length}</h4>

				</div>
			</div>
		</div>

	);
};

export default Home;
