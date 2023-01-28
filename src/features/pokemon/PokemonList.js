import { useSelector } from 'react-redux';
import { selectAllPokemon } from './pokemonSlice';
import { Col, Row } from 'reactstrap';
import PokemonCard from './PokemonCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const PokemonList = () => {
    const pokemon = useSelector(selectAllPokemon);
    const isLoading = useSelector((state) => state.pokemon.isLoading);
    const errMsg = useSelector((state) => state.pokemon.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Row className='ms-auto'>
            {pokemon.map((pokemon) => {
                return (
                    <Col
                        lg='2'
                        md='4'
                        sm='6'
                        xs='12'
                        className='d-flex justify-content-center text-center'
                        key={pokemon.id}
                    >
                        <PokemonCard pokemon={pokemon} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PokemonList;