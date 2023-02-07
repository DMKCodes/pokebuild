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
import { capitalize } from '../../utils/capitalize';

const MoveCard = ({ move }) => {
    const { accuracy, damageClass, flavorText, name, power, pp, type} = move;

    return (
        <Card className='move-card mt-2 mb-2'>
            <CardHeader className='border-bottom mb-0 pb-1 pt-1 fw-bold ps-0 pe-0'>
                {capitalize(name)}
            </CardHeader>
            <CardSubtitle className='fc border-bottom pb-1 pt-2'>
                <span className={type}>{type}</span>
            </CardSubtitle>
            <CardText className='mb-0'>
                <Row className='stat-row pt-1'>
                    <Col xs='6'>
                        <p className='m-0'>
                            <b>Accuracy</b>:
                            <br /> 
                            {accuracy}%</p>
                    </Col>
                    <Col xs='6'>
                        <p className='m-0'>
                            <b>Power</b>: 
                            <br />
                            {power}</p>
                    </Col>
                </Row>
                <Row className='stat-row pb-1'>
                    <Col xs='6'><p className='m-0'>
                        <b>PP</b>:
                        <br />
                        {pp}</p>
                    </Col>
                    <Col xs='6'>
                        <p className='m-0'><b>Class</b>:
                        <br /> 
                        {capitalize(damageClass)}</p>
                    </Col>
                </Row>
            </CardText>
            <CardFooter className='card-footer p-1'>{flavorText}</CardFooter>
        </Card>
    );
};

export default MoveCard;