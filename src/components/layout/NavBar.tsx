import { Link } from "react-router-dom"

const NavBar = () =>{
return (
  <>
  <h1>BudgetBloom</h1>
  <div>
    <Link to="/">Home</Link>
    <Link to="/addExpense">Add Expenses</Link>
    <Link to="/viewExpense">Expenses</Link>
    <Link to="/summary">Summary</Link>
  </div>
  </>
)
}
export default NavBar