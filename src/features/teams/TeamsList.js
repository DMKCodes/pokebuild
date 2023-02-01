import { useSelector } from 'react-redux'
import { selectAllTeams } from './teamsSlice';
import CreateTeamModal from '../../components/CreateTeamModal';
import Team from './Team';

const TeamList = () => {
    const teams = useSelector(selectAllTeams);

    return (
        <>
            <CreateTeamModal />
            {teams.map((team) => {
                return (
                    <Team team={team} key={team.id} />
                );
            })}
        </>
    );
}

export default TeamList;