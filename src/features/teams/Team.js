import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import PokemonCard from '../pokemon/PokemonCard';
import { deleteTeam } from './teamsSlice';

const Team = (team) => {
    const { id, teamName, pokemonOnTeam } = team.team;

    const dispatch = useDispatch();

    const removeTeam = (id) => {
        dispatch(deleteTeam(id));
    };
    
    return (
        <Container key={id} className='border mt-3'>
        <Row>
            <Col>
                <p className='mt-3'>{teamName}</p>
            </Col>
            <Col className='d-flex justify-content-end'>
                <Button 
                    type='button'
                    size='sm'
                    onClick={() => removeTeam(id)}
                >
                    <span>&times;</span>
                </Button>
            </Col>
        </Row>
        <Row>
            {pokemonOnTeam.map((pokemon) => {
                return (
                    <Col xs={1} sm={2} key={pokemon.id}>
                        <PokemonCard pokemon={pokemon} />
                    </Col>
                );
            })}
        </Row>
    </Container>
    );
};

export default Team;