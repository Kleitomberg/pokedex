




//ajax

const pegaPokemon = () =>{

    const url = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i<=150; i++){
        pokemonPromises.push( fetch(url(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {


        const cardsPokemons = pokemons.reduce((accumulator, pokemon)=>{
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            accumulator += `
            <div class="box card ${types[0]}">
                <div class="card-body">
                    <img class="card-image " alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
                     <p> ${pokemon.id}. ${pokemon.name} </p>
                     <span> ${types.join(' | ')} </span>
                 </div>
            </div>
            `
            return accumulator

        }, '')
        const main = document.querySelector('#pokedex').innerHTML=cardsPokemons

    })

}

pegaPokemon()

