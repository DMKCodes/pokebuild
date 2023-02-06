import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Filter from '../components/Filter';
import PokemonList from '../features/pokemon/PokemonList';

const HomePage = () => {
    return (
        <Container fluid className='main-container'>
            <SubHeader current='Pokédex' />
            <Container>
                <Filter />
                <PokemonList />
            </Container>
        </Container>
    );
};

export default HomePage;