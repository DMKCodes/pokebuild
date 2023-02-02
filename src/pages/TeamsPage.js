import { Container } from 'reactstrap';
import TeamsList from '../features/teams/TeamsList';

const TeamsPage = () => {
    return (
        <Container fluid className='main-container'>
            <TeamsList />
        </Container>
    );
};

export default TeamsPage;