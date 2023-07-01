import './pokecss.css';
import './App.css';
const Pokecard = (props) => {
    return (
        <div className='Pokecard'>
            <h1 className='Pokecard-title'>{ props.name }</h1>
            <img className='Pokecard-image' src={ props.image } />
            <p className='Pokecard-data'>Type: { props.type }</p>
            <p className='Pokecard-data'>EXP: { props.exp} </p>
        </div>
    );
}

export default Pokecard;