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
    filterPokemonByFavorites,
    resetPokemon
} from '../features/pokemon/pokemonSlice';
import { BUTTONS } from '../app/shared/BUTTONS';
import FavoriteIcon from '../app/assets/favorite-red.png';

// Need to update Search to reset when empty / update dynamically.

const Filter = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const filterByType = (type) => {
        dispatch(filterPokemonByType(type));
    };

    const filterByFavorite = () => {
        dispatch(filterPokemonByFavorites());
    }

    const resetPokemonList = () => {
        dispatch(resetPokemon());
    };

    return (
        <Container className='p-5'>
            <Button
                onClick={() => setOpen(!open)}
            >
                Filter Results
            </Button>
            {open && (
                <Container className='filter-container mt-3'>
                    <Row className='ms-auto text-center'>
                        <Col className='mt-3 mb-2'>
                            <p>Filter By Type: </p>
                            {BUTTONS.map((item) => {
                                return (
                                    <button
                                        key={item.id}
                                        className='type-btn'
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
                            <button 
                                key='favorites'
                                className='type-btn'
                                data-toggle='tooltip'
                                data-placement='top'
                                title='Favorites'
                                onClick={() => filterByFavorite()}
                            >
                                <img className='type-img' src={FavoriteIcon} alt='favorites'></img>
                            </button>
                        </Col>
                    </Row>
                    <Row className='ms-auto'>
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
                    <Row className='ms-auto'>
                        <Col xs='12' sm='8' md='6' className='mx-auto'>
                            <Form>
                                <FormGroup className='text-center'>
                                    <Label for='search'>Search By Name: </Label>
                                    <Input
                                        type='search'
                                        placeholder='Search...'
                                        onChange={(e) => dispatch(filterPokemonByName(e.target.value))}
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
            )}
        </Container>
    );
};

export default Filter;