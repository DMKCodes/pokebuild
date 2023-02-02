import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Button,
    Input,
    Container
} from 'reactstrap';
import { selectAllTeams, addTeam } from '../features/teams/teamsSlice';

const CreateTeamModal = () => {
    const teams = useSelector(selectAllTeams);
    const dispatch = useDispatch();

    const [modalOpen, setModalOpen] = useState(false);
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTeam = {
            id: teams.length + 1,
            teamName: teamName,
            pokemonOnTeam: []
        };

        dispatch(addTeam(newTeam));
        setModalOpen(false);
    };

    return (
        <>
            <Container className='p-5'>
                <Button onClick={() => setModalOpen(true)}>
                    New Team
                </Button>
            </Container>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Create A New Team
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='teamName'>
                                Name Your Team: 
                            </Label>
                            <Input 
                                placeholder='Team Name' 
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <Button 
                                className='mt-3'
                                type='submit'
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default CreateTeamModal;