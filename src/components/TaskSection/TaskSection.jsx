import "./TaskSection.css";

export default function TaskSection({ searchResults }) {
	return <div className="task-container">
    {searchResults.map((task, i) => (
      <div key={i} className="task-card">
        <img className="task-card__image" src={require("../../assets/" + task.image + ".jpg")} alt={task.image} />
        <p className="task-card__caption">{task.title}</p>
      </div>
    ))}
  </div>
}