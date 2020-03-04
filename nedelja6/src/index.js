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

const footer=document.createElement('footer');
footer.className = 'footer-title';
footer.innerHTML = `developed by ITBootCamp`;

app.append(header,filters,launch_list,footer,filterSelect); 