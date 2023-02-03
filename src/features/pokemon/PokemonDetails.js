import { Container, Row, Col } from 'reactstrap';
import MoveCard from '../moves/MoveCard';
import { divideByTen, metersToFeet, kilogramsToPounds } from '../../utils/conversions';
import { bgStyles } from '../../utils/bgStyles';

const PokemonDetails = ({ pokemon }) => {
    const { id, image, name, types, height, weight } = pokemon;
    const bg = bgStyles(types);

    return (
        <Container 
            className='pokemon-detail-container mt-5'
            style={{ 
                backgroundImage: `linear-gradient(to bottom right, ${bg[0]}, ${bg[1]})` 
            }}
        >
            <Row className='pokemon-detail-head pt-3 pb-2'>
                <Col xs='12' sm='4' className='fc'>
                    <p className='me-2'>#{id}</p>
                    <h2>{name}</h2>
                </Col>
            </Row>
            <Row className='pokemon-detail-body pt-3 pb-3'>
                <Col xs='4' className='fc mt-3 d-flex'>
                    <img src={image} alt={name} className='detail-img' />
                </Col>
                <Col xs='8'>
                    <Row>
                        <Col>
                            <h5 className='fw-bold mb-3'>Types</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-3 text-center'>
                            {types.map((type) => {
                                return (
                                    <div 
                                        key={type} 
                                        className={type.toLowerCase()}
                                    >
                                        {type}
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='fw-bold mb-3 mt-3'>Size</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='6'>
                            <p>Height: {divideByTen(height)}m ({metersToFeet(height)} ft.)</p>
                        </Col>
                        <Col xs='6'>
                            <p>Weight: {divideByTen(weight)}kg ({divideByTen(kilogramsToPounds(weight))} lbs.)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='fw-bold mb-3 mt-3'>Base Stats</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='6' md='4'>
                            <p>HP: {pokemon.hp}</p>
                        </Col>
                        <Col xs='6' md='4'>
                            <p>Attack: {pokemon.attack}</p>
                        </Col>
                        <Col xs='6' md='4'>
                            <p>Defense: {pokemon.defense}</p>
                        </Col>
                        <Col xs='6' md='4'>
                            <p>Sp. Attack: {pokemon.specialAttack}</p>
                        </Col>
                        <Col xs='6' md='4'>
                            <p>Sp. Defense: {pokemon.specialDefense}</p>
                        </Col>
                        <Col xs='6' md='4'>
                            <p>Speed: {pokemon.speed}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <h5 className='fw-bold mb-1 mt-2'>Moves</h5>
            </Row>
            <Row>
                {pokemon.moves.map((move) => {
                    return (
                        <Col xs='6' sm='3' key={move.value}>
                            <MoveCard move={move} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default PokemonDetails;