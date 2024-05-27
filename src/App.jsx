import Home from './Home.jsx'
import { Route, Routes } from "react-router-dom";
import Login from './Login.jsx';
import Session from './Session.jsx';
import AddTasks from './AddTasks.jsx';
import  { useState } from 'react';
export default function App() {
  const [tasks, setTasks]=useState([
    { id: 1, title: 'Organizar la Casa', description: 'Organizar los baños y la cocina de la casa' },
    { id: 2, title: 'Lavar la ropa', description: 'Seleccionar la ropa por colores y lavarla' },
    { id: 3, title: 'Sacar el perro a pasear', description: 'Sacar el perro a pasear' },
  ])
  return (
    <>
     <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/loggedUser" element= {<Session tasks={tasks}/>} />
        <Route path="/addtasks" element= {<AddTasks setTasks={setTasks} tasks={tasks}/>} />
     </Routes>
    </>
  )
}
