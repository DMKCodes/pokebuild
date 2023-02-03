import {
    Button,
    Card,
    CardFooter,
    CardText,
    CardHeader, 
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';

const MoveCard = ({ move }) => {
    const { accuracy, damageClass, flavorText, value, power, pp, type} = move;

    return (
        <Card className='move-card mt-2 mb-2'>
            <CardHeader className='border-bottom mb-0 pb-1 pt-1 fw-bold'>
                {value}
            </CardHeader>
            <CardSubtitle className='fc border-bottom pb-1 pt-2'>
                <span className={type}>{type}</span>
            </CardSubtitle>
            <CardText className='mb-0'>
                <Row className='stat-row'>
                    <Col xs='6'><b>Accuracy</b>: {accuracy}%</Col>
                    <Col xs='6'><b>Power</b>: {power}</Col>
                </Row>
                <Row className='stat-row'>
                    <Col xs='6'><b>PP</b>: {pp}</Col>
                    <Col xs='6'><b>Class</b>: {damageClass}</Col>
                </Row>
            </CardText>
            <CardFooter className='card-footer p-1'>{flavorText}</CardFooter>
        </Card>
    );
};

export default MoveCard;