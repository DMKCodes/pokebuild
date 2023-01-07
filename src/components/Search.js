import { useState } from 'react';
import { 
    Row,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (entry) => {
        entry.preventDefault();
        setSearchInput(entry.target.value);
    };

    return (
        <Row>
            <Form>
                <FormGroup className="text-center">
                    <Label for="search">Search By Name</Label>
                    <Input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Search..."
                        onChange={handleChange}
                        value={searchInput}
                    />
                </FormGroup>
            </Form>
        </Row>
    );
};

export default Search;