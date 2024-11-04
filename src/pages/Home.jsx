import { useState } from "react";
import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";
import TaskSection from "../components/TaskSection";
import "./Home.css";
import NavBar from "../components/NavBar";

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
	];

	const [searchResults, setSearchResults] = useState(tasks);

	function onChangeTaskQuery(event) {
		const taskQuery = event.target.value;
		if (taskQuery === "") {
			setSearchResults(tasks);
		} else {
			setSearchResults(
				tasks.filter(
					task => task.title.toLocaleLowerCase().includes(taskQuery.toLocaleLowerCase())
				)
			);
		}
	}

  return <div className="wrapper">
		<div className="inner-box">
			<SearchBar onChangeTaskQuery={onChangeTaskQuery} />
			<FilterButton />
			<TaskSection searchResults={searchResults} />
		</div>
		<NavBar />
	</div>  
}