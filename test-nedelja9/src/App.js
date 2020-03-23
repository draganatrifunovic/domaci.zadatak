import React, { useState }  from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import { postNewEmployees } from './service/dummyservice';

const App = () => {
  const [inputEmployee, setInputEmployee] = useState("");
  const [inputSalary, setInputSalary] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      if(inputEmployee === "" || inputSalary === ""){
        console.warn('Field is empty');
      } else {
        postNewEmployees(inputEmployee,inputSalary).then(res => console.log(res))
      }
  }

  const handleName = (e) => {
    setInputEmployee(e.target.value)
  }

  const handleSalary = (e) => {
    setInputSalary(e.target.value)
  }

  return(
    <>      
    <form onSubmit={(e) => (handleSubmit(e))}>
      <input type="text" onChange={e => (handleName(e))} placeholder="Name and last name"/>
      <input type="text" onChange={e => (handleSalary(e))}  placeholder="Salary amount"/>
      <input type="submit" value="Add"/>
    </form>
        <EmployeeList/>
    
    </>
  )
}




export default App;
