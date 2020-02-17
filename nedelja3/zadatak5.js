let btnOrder = document.querySelector('#orderBtn');
var countNumb = document.querySelector('#count');
let count = 0;
btnOrder.addEventListener('click', ()=> {
    count++;
    countNumb.innerHTML = count;

})

let orderNow = document.querySelector('#orderNowBtn');
orderNow.addEventListener('click', ()=> {
    let date = new Date();
    if(count == 0) {
        countNumb.innerHTML = `Potrebno je oznaciti kolicinu pice koju zelite naruciti!`;
    } else {
        countNumb.innerHTML = `Narucili ste ${countNumb.innerHTML} pica! ${date.getDate()}. ${date.getMonth()+1}. ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `;
        countNumb = 0;
        countNumb.innerHTML = count;
    }
})