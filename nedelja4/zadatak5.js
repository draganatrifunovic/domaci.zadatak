let pokemon1 = {
    ime: 'Pikacu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet'],
    slika: 'https://img.pokemondb.net/artwork/pikachu.jpg',
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90
    }
}

let pokemon2 = {
    ime: 'Nidoran',
    vrsta: 'otrovan',
    sposobnosti: ['otrovna tacka'],
    slika: 'https://img.pokemondb.net/artwork/nidoran-m.jpg',
    karakteristike: {
        napad: 47,
        odbrana: 52,
        brzina: 41
    }
}

let pokemon3 = {
    ime: 'Charmeleon',
    vrsta: 'vatreni',
    sposobnosti: ['solarna energija'],
    slika: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
    karakteristike: {
        napad: 64,
        odbrana: 58,
        brzina: 80
    }
}

let pokemon4 = {
    ime: 'Psyduck',
    vrsta: 'vodeni',
    sposobnosti: ['vlaga', 'brzo plivanje'],
    slika: 'https://img.pokemondb.net/artwork/psyduck.jpg',
    karakteristike: {
        napad: 52,
        odbrana: 48,
        brzina: 55
    }
}

let pokemon5 = {
    ime: 'Mankey',
    vrsta: 'borbeni',
    sposobnosti: ['vitalni duh','tacka ljutnje'],
    slika: 'https://img.pokemondb.net/artwork/mankey.jpg',
    karakteristike: {
        napad: 105,
        odbrana: 60,
        brzina: 95
    }
    
}

let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5];




function prikaziPokemone(pokemoni) {
    let prikazPokemona = []
    for (let index = 0; index < pokemoni.length; index++) {
        prikazPokemona += `<div>
            <p>${pokemoni[index].ime}</p>
            <p>${pokemoni[index].sposobnosti}</p>
            <img src="${pokemoni[index].slika}">
            <hr>
        </div>`;
        
    }
    return prikazPokemona;
}

document.querySelector('#prikaz').addEventListener('click', ()=> {
    document.querySelector('#app').innerHTML = prikaziPokemone(pokemoni);
})



function snagaPokemona(pokemoni) {
    let maxPos = 0;
    let najjaciPokemon = '';
    for (let index = 0; index < pokemoni.length; index++) {
        if(pokemoni[maxPos].karakteristike.napad < pokemoni[index].karakteristike.napad) {
            pokemoni[maxPos] =pokemoni[index];
            najjaciPokemon = `<div>
            <p>${pokemoni[maxPos].ime}</p>
            <p>${pokemoni[maxPos].sposobnosti}</p>
            <img src="${pokemoni[maxPos].slika}">
             </div>`
        }
        
    }
    return najjaciPokemon;
}


let dugmeNajjaci = document.querySelector('#pobednik').addEventListener('click', ()=> {
    document.querySelector('#app').innerHTML = snagaPokemona(pokemoni);
  
});