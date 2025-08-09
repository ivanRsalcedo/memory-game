async function getPokemonById(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
        throw new Error(`API error ${res.status} on id ${id}`);
    }
    const data = await res.json();
    return abridge(data);
}

function abridge(raw) {
    return {
        name: raw.name,
        id: raw.id,
        imageUrl: raw.sprites?.other?.['official-artwork']?.front_default ?? null
    }
}

export async function getRandomPokemons(amount) {
    let pokemonSet = []; // init array of mons

    for (let i = 0; i < amount; i++) {
        let rand = getRandID();

        while (pokemonSet.some(pkmn => pkmn.id === rand))
            rand = getRandID();

        const pokemon = await getPokemonById(rand);
        pokemonSet.push(pokemon);
    }

    return pokemonSet;
}

function getRandID() {
    return Math.floor(Math.random() * 150) + 1; // just want 1st gen
}