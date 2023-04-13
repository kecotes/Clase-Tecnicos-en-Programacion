import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeTasks from "./pages/HomeTasks"
import AddTasks from "./pages/AddTask"
import List from "./components/List"
function App() {
  return (
    <>
    <Navbar />
    
    <AddTasks />
    <List />
    

    </>
    )
}
export default App