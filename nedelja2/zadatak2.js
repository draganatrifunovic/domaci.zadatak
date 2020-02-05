let cena = 300;
let kolicinaNovca = 2000;

if(kolicinaNovca >= cena) {
    console.log(`Kupac ima dovoljnu kolicinu novca!, Preostala kolicina novca:${kolicinaNovca-cena} `);
} else {
    console.log('Kupac nema dovoljnu kolicinu novca! ' + 'Trenutno stanje: ' + kolicinaNovca);
}