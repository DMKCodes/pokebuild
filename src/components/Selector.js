import { Container, Row, Col } from 'reactstrap';

const importAll = (dir) => {
    return dir.keys().map(dir);
};

const Selector = () => {
    const images = importAll(require.context('../app/assets/types', false, /\.(png)$/));

    return (
        <Container>
            <Row className="ms-auto text-center">
                <Col className="mt-3 mb-3">
                    <p>Filter By Type</p>
                    {images.map((image) => {
                        return (
                            <button className="type-button" key={image}>
                                <img src={image} alt={image} className="type-img" />
                            </button>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Selector;