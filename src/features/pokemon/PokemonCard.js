import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Button,
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle,
    Container,
    Modal,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import { toggleFavorite } from '../pokemon/pokemonSlice';
import { selectAllTeams, addPokemonToTeam } from '../teams/teamsSlice';
import { bgStyles } from '../../utils/bgStyles';
import FavIcon from '../../app/assets/favorite.png';
import FavIconRed from '../../app/assets/favorite-red.png';
import TeamIcon from '../../app/assets/add-to-team.png';
import DetailsIcon from '../../app/assets/details.png';

const PokemonCard = ({ pokemon }) => {
    const { id, name, image, types } = pokemon;
    const bg = bgStyles(types);

    const teams = useSelector(selectAllTeams);
    const dispatch = useDispatch();

    const [modalOpen, setModalOpen] = useState(false);

    const addPokemon = (team) => {
        dispatch(addPokemonToTeam({
            pokemon: pokemon,
            team: team.id
        }));
        setModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add {name} To Team: 
                </ModalHeader>
                <ModalBody>
                    {teams.map((team) => {
                        return (
                            <Button 
                                className='ms-2'
                                key={team.id}
                                onClick={() => addPokemon(team)}
                            >
                                {team.teamName}
                            </Button>
                        )
                    })}
                </ModalBody>
            </Modal>

            <Card 
                className='pokemon-card mb-3 pb-1'
                style={{ 
                    backgroundImage: `linear-gradient(to bottom right, ${bg[0]}, ${bg[1]})`,
                    border: '1px solid black' 
                }}
            >
                <CardTitle className='pokemon-card-title p-1 text-center mb-0 fw-bold'>
                    {name}
                </CardTitle>
                <CardSubtitle className='pokemon-card-subtitle p-1 mt-0'>
                    {types.map((type) => {
                        return <div key={type} className={type.toLowerCase()}>{type}</div>
                    })}
                </CardSubtitle>
                <CardImg src={image} className='card-img p-2' />
                <Container className='container-fluid d-flex justify-content-around ps-2 pe-2'>
                    <img 
                        className='card-icon'
                        src={pokemon.favorite === false ? FavIcon : FavIconRed}
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Add To Favorites'
                        onClick={() => dispatch(toggleFavorite(id))}
                    />
                    <img 
                        src={TeamIcon}
                        className='card-icon'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Add To Team'
                        onClick={() => setModalOpen(true)} 
                    />
                    <Link to={`/pokemon/${id}`}>
                        <img 
                            className='card-icon'
                            src={DetailsIcon}
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Detailed View'
                        />
                    </Link>
                </Container>
            </Card>
        </>
    );
};

export default PokemonCard;