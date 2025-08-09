import './styles.css';

export default function CardGrid(props) {
    return (
        <section className="card-grid">
            {props.items.map((pkmn) =>
                props.renderCard(pkmn, props.onCardClick))}
        </section>
    )
}