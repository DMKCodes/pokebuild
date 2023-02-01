import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Button,
    ButtonGroup,
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle,
    Modal,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import { selectAllTeams, addPokemonToTeam } from '../teams/teamsSlice';
import { addFavorite } from '../favorites/favoritesSlice';

const PokemonCard = ({ pokemon }) => {
    const { id, name, image, types } = pokemon;

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
            <Card className='pokemon-card mb-3'>
                <CardTitle className='border-bottom p-1 text-center mb-0'>
                    ({id}) {name}
                </CardTitle>
                <CardSubtitle className='pokemon-card-subtitle border-bottom p-1 mt-0'>
                    {types.map((type) => {
                        return <div key={type} className={type.toLowerCase()}>{type}</div>
                    })}
                </CardSubtitle>
                <CardImg src={image} className='card-img p-2 border-bottom' />
                <ButtonGroup>
                    <Button
                        className='m-1'
                        onClick={() => dispatch(addFavorite(pokemon))}
                    ><i className='fa fa-heart' /></Button>
                    <Button 
                        className='m-1'
                        onClick={() => setModalOpen(true)}
                    >
                        <i className='fa fa-star' />
                    </Button>
                    <Button
                        className='m-1'
                    >
                        <i className='fa fa-user' />
                    </Button>
                </ButtonGroup>
            </Card>
        </>
    );
};

export default PokemonCard;