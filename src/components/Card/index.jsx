import './styles.css';

export default function Card(props) {
    return (
        <button className="card" onClick={() => props.onClick(props.id)}>
            <img src={props.img} alt={props.name} />
        </button>
    );
}