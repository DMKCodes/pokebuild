import { Container } from 'reactstrap';
import TeamsList from '../features/teams/TeamsList';
import SubHeader from '../components/SubHeader';

const TeamsPage = () => {
    return (
        <Container fluid className='main-container'>
            <SubHeader current='My Teams' />
            <TeamsList />
        </Container>
    );
};

export default TeamsPage;