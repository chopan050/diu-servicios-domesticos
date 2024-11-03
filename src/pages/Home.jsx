import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard"
import "./Home.css";

export function Home() {
	const tasks = [
		{
			title: "Podar césped en Diag. Las Torres 2640",
			image: "cesped",
		},
		{
			title: "Limpiar el baño en Av. Ossa 8224",
			image: "baño",
		},
		{
			title: "Ayuda con mudanza!",
			image: "mudanza",
		},
		{
			title: "Paseo de perro",
			image: "perro",
		}
	]

  return <div className="wrapper">
		<SearchBar />
		<div className="task-container">
			{tasks.map((task, i) => <TaskCard key={i} title={task.title} image={task.image} />)}
		</div>
	</div>  
}