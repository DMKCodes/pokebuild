import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { selectTeamById } from '../features/teams/teamsSlice';
import SubHeader from '../components/SubHeader';
import PokemonDetails from '../features/pokemon/PokemonDetails';
import MoveDropdown from '../components/MoveDropdown';

const TeamDetailPage = () => {
    const { teamId } = useParams();
    const team = useSelector(selectTeamById(teamId));
    console.log(team);

    return (
        <Container fluid className='main-container'>
            <SubHeader current={team.teamName} />
            {team.pokemonOnTeam.map((pokemon) => {
                return (
                    <>
                        <PokemonDetails pokemon={pokemon} key={pokemon.name} />
                        <MoveDropdown pokemon={pokemon} key={pokemon.id} id={team.id}/>
                    </>
                );
            })}
        </Container>
    );
};

export default TeamDetailPage;