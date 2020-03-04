import {getHeader} from '../services/spacex_services'

const Header=(header)=> {
    let divEl = document.createElement('div');
    divEl.className = 'header-title'

    // let {
    //     name,
    //     summary
    // } = header
    getHeader().then(reponse => {
        let {data} = reponse;

        divEl.innerHTML += `<span>${data.name}</span>`
        // divEl.innerHTML += `<span>${data.summary}</span>`
       
    })
   



    return divEl;

} 
export default Header