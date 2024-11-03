import "./TaskCard.css";

export default function TaskCard({ title, image }) {
	return <div className="task-card">
		<img className="task-card__image" src={require("../assets/" + image + ".jpg")} alt={image} />
		<p className="task-card__caption">{title}</p>
	</div>
}