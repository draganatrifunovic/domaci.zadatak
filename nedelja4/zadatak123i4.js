//Zadatak 1

let pokemon1 = {
    ime: 'pikacu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet'],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90
    }
}

let pokemon2 = {
    ime: 'nidoran',
    vrsta: 'otrovan',
    sposobnosti: ['otrovna tacka'],
    karakteristike: {
        napad: 47,
        odbrana: 52,
        brzina: 41
    }
}

let pokemon3 = {
    ime: 'charmeleon',
    vrsta: 'vatreni',
    sposobnosti: ['solarna energija'],
    karakteristike: {
        napad: 64,
        odbrana: 58,
        brzina: 80
    }
}

let pokemon4 = {
    ime: 'psyduck',
    vrsta: 'vodeni',
    sposobnosti: ['vlaga', 'brzo plivanje'],
    karakteristike: {
        napad: 52,
        odbrana: 48,
        brzina: 55
    }
}

let pokemon5 = {
    ime: 'mankey',
    vrsta: 'borbeni',
    sposobnosti: ['vitalni duh','tacka ljutnje'],
    karakteristike: {
        napad: 105,
        odbrana: 60,
        brzina: 95
    }
}

let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5];

//Zadatak 2

function sposobnostPokemona(pokemoni) {
    let nizSposobnosti = [];
    for (let index = 0; index < pokemoni.length; index++) {
        nizSposobnosti.push(...pokemoni[index].sposobnosti);
    }
   return nizSposobnosti;
}
console.log(sposobnostPokemona(pokemoni));

//Zadatak 3

pokemoni.sort((a,b) => {
   return a.karakteristike.brzina - b.karakteristike.brzina
}
)
console.log(pokemoni);

//Zadatak 4

function snagaPokemona(pokemoni) {
    let maxPos = 0
    for (let index = 0; index < pokemoni.length; index++) {
        if(pokemoni[maxPos].karakteristike.napad < pokemoni[index].karakteristike.napad) {
            pokemoni[maxPos] =pokemoni[index];
        }
        
    }
    return pokemoni[maxPos];
}


console.log(snagaPokemona(pokemoni));



