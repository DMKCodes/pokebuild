import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Col,
    Container,
    Row,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { 
    filterPokemonByType, 
    filterPokemonByName,
    resetPokemon
} from '../features/pokemon/pokemonSlice';
import { BUTTONS } from '../app/shared/BUTTONS';

// Need to update Search to reset when empty / update dynamically.

const Filter = () => {
    const dispatch = useDispatch();

    const [textInput, setTextInput] = useState('');

    const filterByType = (type) => {
        dispatch(filterPokemonByType(type));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(filterPokemonByName(textInput));
    };

    const resetPokemonList = () => {
        dispatch(resetPokemon());
    };

    return (
        <Container className='mb-5'>
            <Row className='ms-auto text-center'>
                <Col className='mt-3 mb-2'>
                    <p>Filter By Type</p>
                    {BUTTONS.map((item) => {
                        return (
                            <button
                                key={item.id}
                                className='type-button'
                                data-toggle='tooltip'
                                data-placement='top'
                                title={item.name}
                                onClick={() => filterByType(item.name)}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className='type-img' 
                                />
                            </button>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='d-flex justify-content-center m-auto'>
                    <Button
                        className='mb-3'
                        key={19}
                        onClick={() => resetPokemonList()}
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs='12' sm='8' md='6' className='mx-auto'>
                    <Form onSubmit={(handleSubmit)}>
                        <FormGroup className='text-center'>
                            <Label for='search'>Search By Name: </Label>
                            <Input
                                type='search'
                                placeholder='Search...'
                                onChange={(e) => setTextInput(e.target.value)}
                            />
                            <Button 
                                type='submit'
                                value='Submit'
                                className='mt-3'
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Filter;