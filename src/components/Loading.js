import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col className='d-flex justify-content-center'>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
            <p>Loading...</p>
        </Col>
    )
};

export default Loading;