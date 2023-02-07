import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import MoveCard from './MoveCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { selectAllMoves } from './movesSlice';

const MovesList = () => {
    const moves = useSelector(selectAllMoves);

    const isLoading = useSelector((state) => state.pokemon.isLoading);
    const errMsg = useSelector((state) => state.pokemon.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Row className='ms-auto'>
            {moves.map((move) => {
                return (
                    <Col
                        lg='2'
                        md='4'
                        xs='6'
                        className='d-flex justify-content-center text-center'
                        key={move.id}
                    >
                        <MoveCard move={move} />
                    </Col>
                );
            })}
        </Row>
    );    
};

export default MovesList;