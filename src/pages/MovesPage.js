import { Container } from 'reactstrap';
import MovesList from '../features/moves/MovesList';
import SubHeader from '../components/SubHeader';

const MovesPage = () => {
    return (
        <Container fluid className='main-container'>
            <SubHeader current='Moves' />
            <Container>
                <MovesList />
            </Container>
        </Container>
    );
};

export default MovesPage;