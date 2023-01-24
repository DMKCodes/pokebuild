import { 
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle
} from 'reactstrap';

const PokemonCard = ({ pokemon }) => {
    const { id, name, image, types } = pokemon;
    const capName = name[0].toUpperCase() + name.substring(1);
    const capTypes = types.map((type) => type[0].toUpperCase() + type.substring(1));

    return (
        <Card className='mb-5'>
            <CardTitle className='border-bottom p-1'>
                ({id}) {capName}
            </CardTitle>
            <CardSubtitle className='border-bottom p-1'>
                Types: {capTypes.join(', ')}
            </CardSubtitle>
            <CardImg src={image[0]} className='card-img p-2 border-bottom' />
        </Card>
    );
};

export default PokemonCard;