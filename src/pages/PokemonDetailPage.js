import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { selectPokemonById } from '../features/pokemon/pokemonSlice';
import SubHeader from '../components/SubHeader';
import PokemonDetails from '../features/pokemon/PokemonDetails';

const PokemonDetailPage = () => {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(pokemonId));

    return (
        <Container fluid className='main-container'>
            {pokemon && <SubHeader current={pokemon.name} />}
            <PokemonDetails pokemon={pokemon} />
        </Container>
    )
}

export default PokemonDetailPage;