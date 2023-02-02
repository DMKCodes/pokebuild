import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { selectPokemonById } from '../features/pokemon/pokemonSlice';
import PokemonDetails from '../features/pokemon/PokemonDetails';

const PokemonDetailPage = (id) => {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(pokemonId));

    return (
        <Container fluid className='main-container'>
            <PokemonDetails pokemon={pokemon} />
        </Container>
    )
}

export default PokemonDetailPage;