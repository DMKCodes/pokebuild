import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Container } from 'reactstrap';
import { selectAllMoves } from '../features/moves/movesSlice';
import { addMoveToPokemon } from '../features/teams/teamsSlice';
import { capitalize } from '../utils/capitalize';

const MoveDropdown = ({ pokemon, id }) => {
    const moves = useSelector(selectAllMoves);
    const moveNames = moves.map((move) => {
        return {
            id: move.id,
            name: capitalize(move.name),
            label: capitalize(move.name),
            damageClass: capitalize(move.damageClass),
            flavorText: move.flavorText,
            accuracy: move.accuracy,
            power: move.power,
            pp: move.pp,
            type: move.type
        };
    });

    const dispatch = useDispatch();

    const addMove = (e) => {
        dispatch(addMoveToPokemon({
            team: id,
            pokemon: pokemon.id,
            move: e
        }));
    };

    return (
        <Container className='fc align-items-center'>
            <p className='mt-3'>Add Moves To {pokemon.name}: </p>
            <Select
                className='basic-single move-selector mt-1 ms-2'
                classNamePrefix='select'
                placeholder='Choose a move...'
                options={moveNames}
                isSearchable={true}
                isClearable={true}
                onChange={(e) => addMove(e)}
            ></Select>
        </Container>
    );
};

export default MoveDropdown;