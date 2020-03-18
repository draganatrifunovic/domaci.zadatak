import React from 'react'

const Kontakti = ({contact}) => {
    
    let {name, number} = contact;

    return(
            <p>Ime: {name}  Broj: {number}</p>
    )
}

export default Kontakti