/*
async function starWarMovies(){

    for(let i=1; i<=10; i++){
        const response = await fetch(`https://swapi.dev/api/films/${i}/`)
        if (response.ok = true){
            let starWarMovie = await response.json();
            console.log(`Movie ${i}: ${starWarMovie.title}`);
        }
    }
}
starWarMovies();
*/

async function pokemons(){
    for(let i=1; i<=10; i++){
        const requestResponse = await fetch(``);
        let pokemon = await requestResponse.json();
        console.log(pokemon.name)
    }
}

pokemons();
