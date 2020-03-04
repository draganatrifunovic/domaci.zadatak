let forma = document.querySelector("#secondDiv");
let select = document.querySelector("#selectBox");
let inputDesc = document.querySelector("#desc");
let inputVal = document.querySelector("#sum");
let ulPrihod = document.querySelector("#prihodUl");
let ulRashod = document.querySelector("#rashodUl");
let budzet = document.querySelector("#budzetRez");
const ukRashod = document.querySelector('.p-rashod');
const ukPrihod = document.querySelector('.p-prihod');
let ukupnaSuma = [];
var counter = 0;
let trenutanUnos
let x = 0;
let y = 0;
let z = 0;

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let inc_exp = select.value;
    if (inputDesc.value.trim() != '' && !isNaN(inputVal.value) && inputVal.value > 0) { //provera ispravnosti unosa
        trenutanUnos=inputVal.value
        let totalEl = {
            id: counter,
            selValue: inc_exp,
            value:parseInt(inputVal.value)
        }
        counter++
        ukupnaSuma.push(totalEl);
        addToHtml(totalEl, inputDesc.value, inputVal.value, select.value);
        inputDesc.value = '';
        inputVal.value = '';
    } else {
        alert('Pogresan unos!')
    }
    ukPrihod.innerHTML = `Ukupan prihod:${x} dinara`
    ukRashod.innerHTML =`rashod:${y} dinara  ${y*100/x}%`
    budzet.innerHTML =`Raspolozivo:${z} dinara`

})

function addToHtml(totalElement, inputDesc, inputVal, select) { //funkcija koja dodaje u html
    let btnRmv = document.createElement("button");
    let listItem = document.createElement("li");
    btnRmv.innerHTML = "X";
    btnRmv.className = 'brisanje'
    listItem.className='item-liste'
    btnRmv.addEventListener('click', () => {
        btnRmv.parentElement.remove()
        removeFromArry(totalElement);
        x=totalPrihodi(ukupnaSuma);
        y=totalRashodi(ukupnaSuma);
        z=budget();
        ukPrihod.innerHTML = `Ukupan prihod:${x} dinara`
        ukRashod.innerHTML =`rashod:${y} dinara  ${y*100/x}%`
        budzet.innerHTML =`Raspolozivo:${z} dinara`
    })
    listItem.innerHTML = `${inputDesc}   ${inputVal}`;
  listItem.appendChild(btnRmv);
  if (select=="prihod") {
    ulPrihod.appendChild(listItem);
      x = totalPrihodi(ukupnaSuma)
      console.log(x);
      
  } else if (select == "rashod") {
      let procenat = document.createElement('span');
      procenat.className = 'procenat';
      procenat.innerHTML = `${Math.round(trenutanUnos / x * 100)}`;
      trenutanUnos = 0;
      listItem.appendChild(procenat);
      ulRashod.appendChild(listItem);
      y = totalRashodi(ukupnaSuma)
      console.log(y);
      
    }
    budget();
    console.log(z)
}

function totalRashodi(Arr) {
    let mapRashod = Arr.filter(element => {
       return element.selValue == 'rashod';
    });
    let ukupniRashod = mapRashod.reduce((a, b) => a + b.value, 0);
    
    return ukupniRashod;
    }

function totalPrihodi(Arr) {
    let mapPrihod = Arr.filter(element => {
       return element.selValue == 'prihod';
    });
    let ukupniPrihod = mapPrihod.reduce((a, b) => a + b.value, 0);
    
    return ukupniPrihod
}

function budget() {
    return z=x-y
}

function removeFromArry(arr) {
    

   ukupnaSuma.splice(ukupnaSuma.findIndex( i=> {
        return i.id === arr.id;
    }), 1); }