import './styles.css';

export default function Scoreboard(props) {
    return (
        <div className='scoreboard'>
            <p>Score: {props.score}</p>
            <p>Best: {props.best}</p>
        </div>
    )
}