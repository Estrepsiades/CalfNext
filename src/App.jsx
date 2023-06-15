import { useState } from "react"
import Calender from "./Components/Calender"
import ClassBar from "./Components/ClassBar"
import Params from "./Components/Params"
function App() {

  const [materias, setMaterias] = useState([])
  const [params, setParams] = useState()
  const addMateria = ( materia ) => {
    setMaterias([ ...materias, materia ])
  }
  const deleteMateria = ( id ) => {
    setMaterias( materias.filter( ( materia ) => materia.id !== id ) )
  }
  const allMaterias = () => {
    console.log(materias)
  }
  const generateSchedule = ( param ) => {
    setParams( param )
  }
  return (
    <>
      <h1> CalfNext </h1>
      <ClassBar onAddMateria = { addMateria } onAllMaterias = { allMaterias }/>
      <Calender items = { materias } params = { params } />
      <Params onGenerateSchedule = { generateSchedule } />
    </>
  )
}

export default App
