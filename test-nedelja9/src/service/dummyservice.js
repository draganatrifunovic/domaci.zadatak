import axios from 'axios'

export const getAllEmployees = async () =>{
    return await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => res.data.data )
}

export const postNewEmployees = async (name,salary) => {
    return await axios.post('http://dummy.restapiexample.com/api/v1/create',{name,salary})
}