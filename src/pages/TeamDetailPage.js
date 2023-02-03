import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTeamById } from '../features/teams/teamsSlice';
import PokemonDetails from '../features/pokemon/PokemonDetails';
import MoveDropdown from '../components/MoveDropdown';

const TeamDetailPage = () => {
    const { teamId } = useParams();
    const team = useSelector(selectTeamById(teamId));

    return (
        <>
            {team.pokemonOnTeam.map((pokemon) => {
                return (
                    <>
                        <PokemonDetails pokemon={pokemon} key={pokemon.id} />
                        <MoveDropdown pokemon={pokemon} key={pokemon.id} id={team.id}/>
                    </>
                );
            })}
        </>
    );
};

export default TeamDetailPage;