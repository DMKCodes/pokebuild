import { Container } from 'reactstrap';
import Filter from '../components/Filter';
import PokemonList from '../features/pokemon/PokemonList';

const HomePage = () => {
    return (
        <Container fluid className='main-container'>
            <Container>
                <Filter />
                <PokemonList />
            </Container>
        </Container>
    );
};

export default HomePage;