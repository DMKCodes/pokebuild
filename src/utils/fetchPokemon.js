const fetchPokemon = new Promise((resolve, reject) => {
    const allPokemon = [];

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (pokemon) {
            let x = 0;
            pokemon.results.forEach((pokemon) => {
                x += 1;
                const { name } = pokemon;
                const types = fetchTypes(pokemon);
                const image = fetchImage(pokemon);

                allPokemon.push(
                    {
                        id: x,
                        name: name,
                        types: types,
                        image: image
                    }
                );
            })

        })

    resolve(allPokemon);
})

const fetchTypes = (pokemon) => {
    let types = [];
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            data.types.forEach((type) => types.push(type.type.name));
        })
    return types;
}

const fetchImage = (pokemon) => {
    let image = [];
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            image.push(data.sprites.other.dream_world.front_default);
        })
    return image;
}

export default fetchPokemon;