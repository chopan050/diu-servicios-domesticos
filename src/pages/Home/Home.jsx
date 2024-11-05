import { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import TaskSection from "../../components/TaskSection/TaskSection";
import NavBar from "../../components/NavBar/NavBar";
import tasks from "../../assets/tasks.json";
import "./Home.css";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setSearchResults([...tasks, ...storedTasks]);
  }, []);

  const onChangeTaskQuery = (event) => {
    const taskQuery = event.target.value;
    const allTasks = [...tasks, ...(JSON.parse(localStorage.getItem("tasks")) || [])];
    if (taskQuery === "") {
      setSearchResults(allTasks);
    } else {
      setSearchResults(
        allTasks.filter(
          task => task.title.toLowerCase().includes(taskQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="wrapper">
      <h3>Jobkonect</h3>
      <div className="inner-box">
        <div className="search-container">
          <SearchBar onChangeTaskQuery={onChangeTaskQuery} />
          <FilterButton />
        </div>
        <TaskSection searchResults={searchResults} />
      </div>
      <div className='navbar-container'>
        <NavBar />
      </div>
    </div>
  );
}
