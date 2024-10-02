import axios from 'axios';
import { formData } from '../../types';

export const expenseService = async(data:formData)=>{
try{
  console.log("dataa---",data)
const addExpense = await axios.post(`http://localhost:5500/api/expenses/add`,data)
console.log("Addd-----",addExpense)
return  addExpense.data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}catch(error){
  console.error('Error fetching data:');
}
}

export const getExpenses =async(query:string)=>{

try{
  const allExpenses = await axios.get(`http://localhost:5500/api/expenses?${query}`)
  console.log("all---",allExpenses.data)
  return{
    expense: allExpenses.data
  }
} catch(error){
  console.log(error)
  return{
    expense:[]
  }
}
}