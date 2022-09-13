import React, { useState } from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [addTarea, setAddTarea] = useState([]);

	function listaTareas(e) {
		if (e.key === "Enter") {
			setAddTarea([...addTarea, e.target.value]);
			e.target.value = "";
		}
	}
	console.log(addTarea);

	listaTareas.pop

	let tareaPendientes = "";
	if (addTarea.length == 0) {
		tareaPendientes = "No hay tarea pendientes "
	} else {
		tareaPendientes = "Tarea pendientes = ";
	}

	return (
		<div classNameName="contenedor">
			<h1 classNameName="text-center mt-5">Todos</h1>
			<div classNameName="contenedor-tareas">
				<div classNameName="input-group mb-3">
					<input
						type="type"
						classNameName="form-control"
						placeholder="Añadir Tarea"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						onKeyDown={listaTareas}
					/>

				</div>
				<div>
					<div className="list-group">
						<div>
							<li className="list-group-item">Cras justo odio	</li>							
						</div>						
					</div>
				</div>
				<div>
					<h4>{tareaPendientes}{addTarea.length}</h4>
				</div>
			</div>
		</div>

	);
};

export default Home;
