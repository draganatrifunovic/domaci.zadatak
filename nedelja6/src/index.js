//dokumentacija
//dizajn aplikacije
//implementaciju
//ansihroni axios

//kreirati slicnu aplikaciju npr starwars//da se nadjemo u postojecem kodu i da radimo filtere

import LaunchList from "./components/launch_list";
import Header from "./components/header"
import Filter from "./components/filter"

const app=document.querySelector('#app');


const header = Header();
const filters=document.createElement('section');
const filterSelect = Filter();
const launch_list=LaunchList();
const select = document.querySelector('#selectYear');

for(let i = 2006; i<=2030;i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
        
    }
select.addEventListener('change', ()=> {
    let selected = select.value;
    let filtered = Filter(selected)
    if (selected == 'all') {
        app.innerHTML = ''
        app.appendChild(launch_list);

    } else {
        app.innerHTML = ''
        app.appendChild(filtered)
    }
    
})


const footer=document.createElement('footer');
footer.className = 'footer-title';
footer.innerHTML = `developed by ITBootCamp`;

app.append(header,filters,launch_list,footer,filterSelect); 