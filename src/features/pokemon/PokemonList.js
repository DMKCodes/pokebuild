import { Col, Row } from 'reactstrap';
import PokemonCard from './PokemonCard';

const PokemonList = (pokemon) => {
    console.log(pokemon);

    return (
        <Row className='ms-auto'>
            {pokemon.pokemon.map((pokemon) => {
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