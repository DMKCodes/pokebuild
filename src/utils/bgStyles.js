export const bgStyles = (types) => {
    const colors = [];

    const allTypes = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        bug: '#A8B820',
        flying: '#A890F0',
        fighting: '#C03028',
        ice: '#98D8D8',
        rock: '#B8A038',
        ground: '#E0C068',
        poison: '#A040A0',
        psychic: '#F85888',
        ghost: '#706989',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#F0B6BC',
    };

    types.map((type) => {
        if (type.toLowerCase() === 'normal') {
            colors.push(allTypes.normal);
        } 
        if (type.toLowerCase() === 'fire') {
            colors.push(allTypes.fire);
        } 
        if (type.toLowerCase() === 'water') {
            colors.push(allTypes.water);
        } 
        if (type.toLowerCase() === 'electric') {
            colors.push(allTypes.electric);
        } 
        if (type.toLowerCase() === 'grass') {
            colors.push(allTypes.grass);
        } 
        if (type.toLowerCase() === 'bug') {
            colors.push(allTypes.bug);
        } 
        if (type.toLowerCase() === 'flying') {
            colors.push(allTypes.flying);
        } 
        if (type.toLowerCase() === 'fighting') {
            colors.push(allTypes.fighting);
        } 
        if (type.toLowerCase() === 'ice') {
            colors.push(allTypes.ice);
        } 
        if (type.toLowerCase() === 'rock') {
            colors.push(allTypes.rock);
        } 
        if (type.toLowerCase() === 'ground') {
            colors.push(allTypes.ground);
        } 
        if (type.toLowerCase() === 'poison') {
            colors.push(allTypes.poison);
        } 
        if (type.toLowerCase() === 'psychic') {
            colors.push(allTypes.psychic);
        } 
        if (type.toLowerCase() === 'ghost') {
            colors.push(allTypes.ghost);
        } 
        if (type.toLowerCase() === 'dragon') {
            colors.push(allTypes.dragon);
        } 
        if (type.toLowerCase() === 'dark') {
            colors.push(allTypes.dark);
        } 
        if (type.toLowerCase() === 'steel') {
            colors.push(allTypes.steel);
        } 
        if (type.toLowerCase() === 'fairy') {
            colors.push(allTypes.fairy);
        } 
    });

    if (colors.length === 1) {
        colors.push('#FAF9F6');
    }

    return colors;
};