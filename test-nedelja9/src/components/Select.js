import React, { useState } from 'react'

const Select = ({handleChange}) => {

    const [selected,setSelected] = useState(5)

    const handleChange=(e)=> {
        let selectedVal = e.target.value;
        setSelected(selectedVal);

    }

    return(
        <>
            <select onChange={(e) => handleChange(e)}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>25</option>
            </select>

        </>
    )
}

export default Select;