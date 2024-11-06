import { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import TaskSection from "../../components/TaskSection/TaskSection";
import NavBar from "../../components/NavBar/NavBar";
import tasks from "../../assets/tasks.json";
import "./Home.css";

export default function Home() {
  const [taskQuery, setTaskQuery] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [timeFilter, setTimeFilter] = useState(null);
  const [paymentFilter, setPaymentFilter] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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
        var getter = null;
        if (key === "dates") {
          getter = (task) => task.date;
        } else if (key === "times") {
          getter = (task) => task.time;
        } else if (key === "payments") {
          getter = (task) => task.payment;
        }
        if (getter !== null) {
          const [minValue, maxValue] = filters[key];
          selectedTasks = selectedTasks.filter(
            task => (getter(task) >= minValue) && (getter(task) <= maxValue)
          );
        }
      }
    }

    setSearchResults(selectedTasks);

  }, [taskQuery, dateFilter, timeFilter, paymentFilter]);

  return (
    <div className="wrapper">
      Jobkonect {/*Centrar titulo de app, agrandar un poco la letra */}
      <div className="inner-box">
        <SearchBar setTaskQuery={setTaskQuery} />
        <FilterButton setDateFilter={setDateFilter} setTimeFilter={setTimeFilter} setPaymentFilter={setPaymentFilter} />
        <TaskSection searchResults={searchResults} />
      </div>
      <div className='navbar-container'>
        <NavBar/>
      </div>
    </div>
  );
}
