import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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
            <Row className='team-header border-bottom'>
                <Col className='d-flex'>
                    <h3 className='m-3 fw-bold'>{teamName}</h3>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Link to={`/team/${id}`}>
                        <Button
                            className='team-btn btn-success mt-3 mb-3 ms-2 me-2'
                            type='button'
                        >
                            Team Details
                        </Button>
                    </Link>
                    <Button
                        className='team-btn btn-danger mt-3 mb-3 ms-2 me-2'
                        type='button'
                        onClick={() => removeTeam(id)}
                    >
                        Delete Team
                    </Button>
                </Col>
            </Row>
            <Row className='team-body pt-3'>
                {pokemonOnTeam.map((pokemon) => {
                    return (
                        <Col 
                            lg='2'
                            md='4'
                            sm='6'
                            xs='12'
                            className='fc text-center'
                            key={pokemon.id}
                        >
                            <PokemonCard pokemon={pokemon} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Team;