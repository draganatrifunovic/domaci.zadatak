let niz = [1,2,3,4,5,10,15,23,1,5];
function divisibleByFive(arr) {
    let x = [];
    for(let elem of arr) {
        if(elem%5 == 0) {
            x.push(elem);
        }
    }
    return x;
}

console.log(divisibleByFive(niz));