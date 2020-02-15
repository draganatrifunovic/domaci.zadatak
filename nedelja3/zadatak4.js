function lifeSupply(numPerMonth,age) {
    let numPerYear = numPerMonth * 12;
    let tillHundred = 100 - age;
    return numPerYear * tillHundred;
}
console.log(lifeSupply(10,26));