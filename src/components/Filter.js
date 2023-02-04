import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Col,
    Container,
    Row,
    Input
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

    const resetPokemonList = () => {
        dispatch(resetPokemon());
    };

    const filterByType = (type) => {
        dispatch(filterPokemonByType(type));
    };

    const filterByFavorite = () => {
        dispatch(filterPokemonByFavorites());
    };

    const filterByName = (textInput) => {
        resetPokemonList();
        dispatch(filterPokemonByName(textInput));
    };

    return (
        <Container className='p-5'>
            <Button
                color='primary'
                onClick={() => setOpen(!open)}
            >
                Filter Results
            </Button>
            {open && (
                <Container className='filter-container mt-3'>
                    <Row className='ms-auto text-center'>
                        <Col className='mt-3 mb-2'>
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
                    <Row className='ms-auto pt-3'>
                        <Col xs='12' sm='8' md='6' className='mx-auto text-center'>
                            <Input
                                type='search'
                                placeholder='Search by name...'
                                className='mb-3'
                                onChange={(e) => (filterByName(e.target.value))}
                            />
                        </Col>
                    </Row>
                    <Row className='ms-auto'>
                        <Col xs='2' className='d-flex justify-content-center mx-auto'>
                            <Button
                                className='mb-3'
                                key={19}
                                onClick={() => resetPokemonList()}
                            >
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
};

export default Filter;