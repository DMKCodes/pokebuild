import { 
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle
} from 'reactstrap';
import { capitalize } from '../../utils/capitalize';

const PokemonCard = ({ pokemon }) => {
    const { id, name, image, types } = pokemon;
    const capName = capitalize(name);

    return (
        <Card className='mb-5'>
            <CardTitle className='border-bottom p-1'>
                ({id}) {capName}
            </CardTitle>
            <CardSubtitle className='border-bottom p-1'>
                Types: {types.map((type) => {
                    return capitalize(type.type.name);
                }).join(', ')}
            </CardSubtitle>
            <CardImg src={image} className='card-img p-2 border-bottom' />
        </Card>
    );
};

export default PokemonCard;