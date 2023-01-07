import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PokemonCard = ({ pokemon }) => {
    const { image, name } = pokemon;

    return (
        <Card className='pokemon-card'>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default PokemonCard;