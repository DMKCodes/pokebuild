import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { selectAllTeams } from '../features/teams/teamsSlice';

const CreateTeamModal = () => {
    const teams = useSelector(selectAllTeams);
    const [createTeamModalOpen, setCreateTeamModalOpen] = useState(false);
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTeam = {
            id: teams.length + 1,
            teamName: teamName,
            pokemonOnTeam: []
        };
        // teams.push(newTeam);
        // setTeams(teams);
        setCreateTeamModalOpen(false);
    };

    return (
        <>
            <Container className='d-flex justify-content-center mt-3'>
                <Button onClick={() => setCreateTeamModalOpen(true)}>
                    Create A New Team
                </Button>
            </Container>
            <Modal isOpen={createTeamModalOpen}>
                <ModalHeader toggle={() => setCreateTeamModalOpen(false)}>
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