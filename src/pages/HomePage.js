import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Filter from '../components/Filter';
import PokemonList from '../features/pokemon/PokemonList';
import { selectAllPokemon } from '../features/pokemon/pokemonSlice';

const HomePage = () => {
    const pokemon = useSelector(selectAllPokemon);
    const [displayPokemon, setDisplayPokemon] = useState([pokemon]);

    return (
        <Container>
            <Filter 
                pokemon={pokemon}
                setDisplayPokemon={setDisplayPokemon}
            />
            <PokemonList pokemon={displayPokemon}/>
        </Container>
    );
};

export default HomePage;