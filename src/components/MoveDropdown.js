import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { selectAllMoves } from '../features/moves/movesSlice';

const MoveDropdown = () => {
    const moves = useSelector(selectAllMoves);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className='d-flex p-5'>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                    {moves.map((move) => {
                        return (
                            <DropdownItem>{move.name}</DropdownItem>
                        );
                    })}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
};

export default MoveDropdown;