import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Filter from '../components/Filter';
import PokemonList from '../features/pokemon/PokemonList';
import { selectAllPokemon } from '../features/pokemon/pokemonSlice';

const HomePage = () => {
    const pokemon = useSelector(selectAllPokemon);

    return (
        <Container>
            <Filter />
            <PokemonList />
        </Container>
    );
};

export default HomePage;