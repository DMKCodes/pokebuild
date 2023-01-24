import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PokemonCard from '../pokemon/PokemonCard';
import { TEAMS } from '../../app/shared/TEAMS';
import CreateTeamModal from '../../components/CreateTeamModal';

const TeamList = () => {
    const [teams, setTeams] = useState(TEAMS);

    const deleteTeam = (team) => {
        const index = teams.indexOf(team);
        teams.splice(index, 1);
        console.log(teams);
        setTeams(teams);
    };

    if (teams.length === 0) {
        return <CreateTeamModal teams={teams} setTeams={setTeams} />
    } else {
        return (
            <>
                <CreateTeamModal teams={teams} setTeams={setTeams} />
                {teams.map((team) => {
                    return (
                        <Container key={team.id} className='border mt-3'>
                            <Row>
                                <Col>
                                    <p>{team.teamName}</p>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                {/* fix this button later */}
                                <Button 
                                    type='button' 
                                    onClick={() => deleteTeam(team)}
                                >
                                    <span>&times;</span>
                                </Button>
                                </Col>
                            </Row>
                            <Row>
                                {team.pokemonOnTeam.map((pokemon) => {
                                    return (
                                        <Col xs={1} sm={2} key={pokemon.id}>
                                            <PokemonCard pokemon={pokemon} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    );
                })}
            </>
        );
    }        
}

export default TeamList;