import { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import TaskSection from "../../components/TaskSection/TaskSection";
import NavBar from "../../components/NavBar/NavBar";
import tasks from "../../assets/tasks.json";
import "./Home.css";
import TaskDescription from "../../components/TaskDescription/TaskDescription";

export default function Home() {
  const [taskQuery, setTaskQuery] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [timeFilter, setTimeFilter] = useState(null);
  const [paymentFilter, setPaymentFilter] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setSearchResults([...tasks, ...storedTasks]);
  }, []);

  // Filtrar resultados
  useEffect(() => {
    var selectedTasks = [...tasks, ...(JSON.parse(localStorage.getItem("tasks")) || [])];
    if (taskQuery !== "") {
      selectedTasks = selectedTasks.filter(
        task => task.title.toLowerCase().includes(taskQuery.toLowerCase())
      );
    }

    const filters = { dates: dateFilter, times: timeFilter, payments: paymentFilter };
    for (const key of Object.keys(filters)) {
      if (filters[key] !== null) {
        const attr = key.substring(0, key.length - 1);
        if (key !== null) {
          const [minValue, maxValue] = filters[key];
          selectedTasks = selectedTasks.filter(
            task => (task[attr] >= minValue) && (task[attr] <= maxValue)
          );
        }
      }
    }

    setSearchResults(selectedTasks);

  }, [taskQuery, dateFilter, timeFilter, paymentFilter]);

  if (selectedTask !== null) {
    return <div className="wrapper">
      <TaskDescription selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
    </div>
  }

  return (
    <div className="wrapper">
      Jobkonect {/*Centrar titulo de app, agrandar un poco la letra */}
      <div className="inner-box">
        <div className="search-container">
          <SearchBar setTaskQuery={setTaskQuery} />
          <FilterButton
            setDateFilter={setDateFilter}
            setTimeFilter={setTimeFilter}
            setPaymentFilter={setPaymentFilter}
          />
        </div>
        <TaskSection searchResults={searchResults} setSelectedTask={setSelectedTask} />
      </div>
      <div className='navbar-container'>
        <NavBar />
      </div>
    </div>
  );
}
