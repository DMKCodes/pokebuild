import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Filter from '../components/Filter';
import PokemonList from '../features/pokemon/PokemonList';
import fetchPokemon from '../utils/fetchPokemon';

const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [origPokemon, setOrigPokemon] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const allPokemon = await fetchPokemon;
            setPokemon(allPokemon);
            setOrigPokemon(allPokemon);
        };
        getPokemon();
    }, [])

    return (
        <Container>
            <Filter 
                pokemon={pokemon} 
                setPokemon={setPokemon}
                origPokemon={origPokemon}
                setOrigPokemon={setOrigPokemon}
            />
            <PokemonList pokemon={pokemon}/>
        </Container>
    );
};

export default HomePage;