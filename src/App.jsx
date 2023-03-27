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
  const generateHorary = ( param ) => {
    console.log(`From App.jsx: ${param}`)
    setParams( param )
  }
  return (
    <>
      <h1> CalfNext </h1>
      <h1> Contador { materias.length } </h1>
      <ClassBar onAddMateria = { addMateria } />
      <Calender items = { materias } params = { params } />
      <Params onGenerateHorary = { generateHorary } />
    </>
  )
}

export default App
