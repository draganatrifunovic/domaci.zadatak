let btnOrder = document.querySelector('#orderBtn');
var countNumb = document.querySelector('#count');
let count = 0;
btnOrder.addEventListener('click', ()=> {
    count++;
    countNumb.innerHTML = count;

})

let orderNow = document.querySelector('#orderNowBtn');
orderNow.addEventListener('click', ()=> {
    countNumb.innerHTML = 0;
    let date = new Date();
    if(countNumb.innerHTML == 0) {
        countNumb.innerHTML = `Narucili ste ${countNumb.innerHTML} pica! ${date.getDate()}. ${date.getMonth()+1}. ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `;
    }
})