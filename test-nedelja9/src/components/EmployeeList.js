import React, { useState, useEffect } from 'react'
import Employee from './Employee'
import { getAllEmployees } from '../service/dummyservice'


const EmployeeList = () => {
    const [employee, setEmployee] = useState([])
  
    useEffect(() => {
      getAllEmployees().then(data => setEmployee(data))
    }, [])
  
  
    return (
      <>
        <div className="container">
          {employee.map(em => <Employee em={em} key={em} />)}
        </div>
      </>
    )
  }

  export default EmployeeList