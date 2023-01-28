import { Container, Row, Col, Button } from 'reactstrap';
import PokemonCard from '../pokemon/PokemonCard';

const Team = (team) => {
    // console.log(team);
    const { id, teamName, pokemonOnTeam } = team.team;
    return (
        <Container key={id} className='border mt-3'>
        <Row>
            <Col>
                <p>{teamName}</p>
            </Col>
            <Col className='d-flex justify-content-end'>
            {/* fix this button later */}
            <Button 
                type='button' 
                onClick={() => console.log('ph')}
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