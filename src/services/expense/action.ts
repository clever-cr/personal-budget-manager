import { expenseActions } from ".";

import { expenseService,getExpenses } from "./service";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const  addExpense = (data:any)=> async (dispatch:any) =>{
  try{
dispatch(expenseActions.setIsLoading(true))
const res = await expenseService(data)
console.log("ressss",res)
if(res){
  dispatch(expenseActions.setIsLoading(false))
}
  }catch(error){
console.log("erro",error)
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getExpense = (query:string)=>async(dispatch:any)=>{
  dispatch(expenseActions.setIsLoading(false))
try{

const res = await getExpenses(query);

if(res){
dispatch(expenseActions.setIsLoading(false))
dispatch(
  expenseActions.setAll({
    expense:res?.expense.data || [],
  })
)
}
}catch(error){
  console.log("error",error)
}
}
  