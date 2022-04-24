document.querySelector('#srchBtn').addEventListener('click', summonPokemon);

function summonPokemon() {
    let name = document.querySelector('#srchBar').value;
    let pokeAPI = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(pokeAPI)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // DOM Locations
            const mainContainer = document.querySelector('section');
            const pokeName = document.querySelector('#pokeName');
            const pokeImg = document.querySelector('#pokeImg');
            const pokeType = document.querySelector('#pokeType');
            const statHealth = document.querySelector('#statHealth');
            const statAttack = document.querySelector('#statAttack');
            const statDefense = document.querySelector('#statDefense');
            const statSpAttack = document.querySelector('#statSpAttack');
            const statSpDefense = document.querySelector('#statSpDefense');
            const statSpeed = document.querySelector('#statSpeed');

            // Type Listing
            let typesList = []
            for (let i = 0; i < data.types.length; i++) {
                typesList.push(data.types[i].type.name)
            }

            pokeName.innerText = data.forms[0].name;
            pokeImg.src = data.sprites.front_default;
            pokeImg.alt = `Image of the pokemon ${name}`;
            pokeType.innerText = typesList.join(', ');
            statHealth.innerText = data.stats[0].base_stat;
            statAttack.innerText = data.stats[1].base_stat;
            statDefense.innerText = data.stats[2].base_stat;
            statSpAttack.innerText = data.stats[3].base_stat;
            statSpDefense.innerText = data.stats[4].base_stat;
            statSpeed.innerText = data.stats[5].base_stat;

            if (mainContainer.classList.contains('hide')) {
                mainContainer.classList.remove('hide');
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}