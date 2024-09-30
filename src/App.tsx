import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import AddExpense from "./pages/AddExpense"
import ViewExpense from "./pages/ViewExpense"
import ExpenseSummary from "./pages/ExpenseSummary"

function App() {


  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="addExpense" element={<AddExpense/>}/>
    <Route path="viewExpense" element={<ViewExpense/>}/>
    <Route path="summary" element={<ExpenseSummary/>}/>
  </Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
