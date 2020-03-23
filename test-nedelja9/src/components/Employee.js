import React from 'react'

 const Employee = ({em}) => {

    return (
        <>
        <p>{em.id}</p>
        <p>{em.employee_name}</p>
        <p>{em.employee_salary}</p>
        <p>{em.employee_age}</p>
        <img src={em.profile_image} alt="No picture"/>
        <hr></hr>

        </>
    )
}

export default Employee