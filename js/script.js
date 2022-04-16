let pokeAPI = `https://pokeapi.co/api/v2/pokemon/ditto`;

fetch(pokeAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })