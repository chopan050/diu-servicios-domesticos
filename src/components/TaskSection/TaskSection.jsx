import "./TaskSection.css";

export default function TaskSection({ searchResults, setSelectedTask }) {
  return (
    <div className="task-container">
      {searchResults.map((task, i) => (
        <div key={i} className="task-card" onClick={() => setSelectedTask(task)}>
          <img
            className="task-card__image"
            src={require("../../assets/" + task.image + ".jpg")}
            alt={task.image}
          />
          <div className="description-container">
            <p className="task-card__caption">{task.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}