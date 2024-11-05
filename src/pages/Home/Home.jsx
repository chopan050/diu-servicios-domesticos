import { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import TaskSection from "../../components/TaskSection/TaskSection";
import NavBar from "../../components/NavBar/NavBar";
import tasks from "../../assets/tasks.json";
import "./Home.css";

export default function Home() {
	const [searchResults, setSearchResults] = useState(tasks);

	const onChangeTaskQuery = (event) => {
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
	};

  return <div className="wrapper">
		<div className="inner-box">
			<SearchBar onChangeTaskQuery={onChangeTaskQuery} />
			<FilterButton />
			<TaskSection searchResults={searchResults} />
		</div>
		<NavBar />
	</div>  
}