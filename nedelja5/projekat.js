const btnAdd = document.querySelector('#button-add');
const selectBtn = document.querySelector('#selectBox');
const inputDesc = document.querySelector('#desc');
const inputVal = document.querySelector('#sum');
const ulPrihod = document.querySelector('#prihodUl');
const ulRashod = document.querySelector('#rashodUl');
const ukRashod = document.querySelector('.p-rashod');
const ukPrihod = document.querySelector('.p-prihod');
const budzet = document.querySelector('#budzetRez');

let trenutniOpis = '';
let trenutnaSuma = '';
let counter = 0;
let prihodi = [];
let rashodi = [];

inputDesc.addEventListener('input',(e)=> {
    trenutniOpis = e.target.value;
})

inputVal.addEventListener('input', (e)=> {
    trenutnaSuma = e.target.value;
})

function ukupniRezultati(p,r) {
    return p-r;
}

btnAdd.addEventListener('click', (e)=> {
    e.preventDefault();
    description = inputDesc.value;
    select = selectBtn.value;
    amount = inputVal.value;

    if(description.trim() == '') {
        alert('error');
        trenutniOpis = '';
        description = '';
        return
    } else if(amount <= 0) {
        alert('error');
        trenutnaSuma = '';
        amount = '';
        return
    }

    if(select == 'prihod') {
        let taskPrihodi = {
            id: counter,
            desc: trenutniOpis.trim(),
            val: trenutnaSuma
        }
        counter++;
        prihodi.push(taskPrihodi);
        liItemPrihodi(taskPrihodi);
        inputDesc.value = '';
        inputVal.value = '';
        trenutnaSuma = '';
        trenutniOpis = '';
       
    } else if(select == 'rashod') {
        let taskRashodi = {
            id: counter,
            desc: trenutniOpis.trim(),
            val: trenutnaSuma
        }
        counter++;
        rashodi.push(taskRashodi);
        liItemRashod(taskRashodi);
        inputDesc.value = '';
        inputVal.value = '';
        trenutnaSuma = '';
        trenutniOpis = '';
    }

    var sumaPrihoda = ukupniPrihodi(prihodi);
    ukPrihodHtml(sumaPrihoda);

    var sumaRashoda = ukupniRashodi(rashodi);
    ukRashodHtml(sumaRashoda);

    var rezultat = sumaPrihoda - sumaRashoda(rashodi)
    addOstatakHtml(ostatak); 

})

function uklanjanjeElementaPrihodi  (el) {
    prihodi.splice(prihodi.findIndex(function (index) {
        return index.id === el.id;
    }), 1);
};
function uklanjanjeElementaRashodi  (el) {
    rashodi.splice(rashodi.findIndex(function (index) {
        return index.id === el.id;
    }), 1);



function liItemRashod(taskRashodi) {
    let divContainer = document.createElement('div')
    let hr = document.createElement('hr')
    let liEl = document.createElement('li')
    liEl.innerHTML = `${taskRashodi.desc} -${taskRashodi.val}`;
    let button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', ()=> {
        liEl.remove();
        

        sumaRashoda = ukupniRashodi(taskRashodi) - taskRashodi.val;
        uklanjanjeElementaRashodi(taskRashodi);
        ukRashodHtml(sumaRashoda);
        // rezultat = ukupniRashodi(rashodi) - sumaRashoda;
        // krajnjiRezultat(rezultat);

        
    })
    liEl.appendChild(button)
    // let span = document.createElement('span');
    // span.className = 'badge badge-secondary';
    // liEl.appendChild(span)
    liEl.appendChild(hr)
    divContainer.appendChild(liEl);
    ulRashod.appendChild(divContainer);

}

function liItemPrihodi(task) {
    let divContainer = document.createElement('div')
    let hr = document.createElement('hr')
    let liEl = document.createElement('li')
    liEl.innerHTML = `${task.desc} +${task.val}`;
    let button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', ()=> {
        liEl.remove();
        uklanjanjeElementaPrihodi(task);

        sumaPrihoda = ukupniPrihodi(task) - task.val;
        uklanjanjeElementaPrihodi(task);
        ukPrihodHtml(sumaPrihoda);
        rezultat = sumaPrihoda - sumaRashoda(rashodi);
       
    })
    liEl.appendChild(button)
    liEl.appendChild(hr)
    divContainer.appendChild(liEl);
    document.querySelector('.p-prihod').innerHTML = `Prihod      +${amount}`
    ulPrihod.appendChild(divContainer);

}

function ukupniPrihodi(prihod) {
    let suma = 0;
    prihod.forEach(element => {
        suma += element.val
    });
    return suma;
}

function ukupniRashodi(rashod) {
    let suma = 0;
    rashod.forEach(element => {
        suma += element.val
    })
    return suma
}

// const ukRashodHtml = (el) => {
//     ukRashod.innerHTML = '';
//     let dodatiRashod = document.createElement('p');
//     dodatiRashod.innerHTML = `-${sumaRashoda}`
//     ukRashod.appendChild(dodatiRashod);
// }

// const ukPrihodHtml = (el) => {
//     ukPrihod.innerHTML = '';
//     let dodatiPrihod = document.createElement('p');
//     dodatiPrihod.innerText = `+${sumaPrihoda}`
//     ukPrihod.appendChild(dodatiPrihod);
// }