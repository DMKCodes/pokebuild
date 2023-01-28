import {
    Col,
    Container,
    Row,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { BUTTONS } from '../app/shared/BUTTONS';

const Filter = ({ pokemon, setDisplayPokemon }) => {

    const filterPokemonByType = (value) => {
        const filteredPokemon = pokemon.filter(
            (pokemon) => pokemon.types.includes(value)
        );
        setDisplayPokemon(filteredPokemon);
    };

    const filterPokemonByName = (value) => {
        // Finish this.
    };

    const resetPokemon = (pokemon) => {
        setDisplayPokemon(pokemon);
    };

    return (
        <Container className='mb-5'>
            <Row className='ms-auto text-center'>
                <Col className='mt-3 mb-2'>
                    <p>Filter By Type</p>
                    {BUTTONS.map((item) => {
                        return (
                            <button 
                                className='type-button' 
                                key={item.id}
                                onClick={() => filterPokemonByType(item.value)}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.value} 
                                    className='type-img' 
                                />
                            </button>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='d-flex justify-content-center m-auto'>
                    <button
                        key={19}
                        onClick={() => resetPokemon(pokemon)}
                        className='mb-3'
                    >
                        Reset
                    </button>
                </Col>
            </Row>
            <Row>
                <Col xs='12' sm='8' md='6' className='mx-auto'>
                    <Form onSubmit={filterPokemonByName()}>
                        <FormGroup className='text-center'>
                            <Label for='search'>Search By Name</Label>
                            <Input
                                type='search'
                                name='search'
                                id='search'
                                placeholder='Search...'
                            />
                            <button 
                                type='submit'
                                value='Submit'
                                className='mt-3'
                            >
                                Submit
                            </button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Filter;