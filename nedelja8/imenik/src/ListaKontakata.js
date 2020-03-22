import React from 'react'
import Kontakti from './Kontakti'

const ListaKontakata = ({contacts}) => {

    return(
        <div>
            {contacts.map(el => <Kontakti contact={el} />)}
        </div>
    )
    
}

export default ListaKontakata