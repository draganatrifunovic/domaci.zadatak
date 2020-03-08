import { getPastLaunches } from '../services/spacex_services'
import Launch from './launch';


const Filter=(year)=> {
    let div = document.createElement('div');
    

    getPastLaunches().then(res=> {
        let {data} = res
       

        data.forEach(element=> {
            if(year == element.launch_year) {
                div.appendChild(Launch(element))
            }
            
        })

    })
    return div


} 
export default Filter