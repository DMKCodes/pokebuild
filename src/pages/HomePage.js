import Selector from '../components/Selector';
import Search from '../components/Search';
import PokemonList from '../features/pokemon/PokemonList';
import { Container } from 'reactstrap';

const HomePage = () => {
    return (
        <Container>
            <Selector />
            <Search />
            <PokemonList />
        </Container>
    );
};

export default HomePage;