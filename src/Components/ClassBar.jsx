import React, { useState } from 'react'
import '../css/classBar.css'
export default function ClassBar({ onAddMateria, onAllMaterias }) {
    const [ days, setDays ] = useState([])
    const onAddDay = ( event ) => {
        event.preventDefault()
        if( event.target.form[4].value === '' || event.target.form[5].value === '' ){
            console.log('Time is empty')
            return
        }
        days.forEach( ( day ) => {
            if( day.day === event.target.form[3].value ){
                console.log('Day already exist')
                return
            }
        })
        const day = {
            day: event.target.form[3].value,
            timeStart: event.target.form[4].value,
            timeEnd: event.target.form[5].value
        }
        setDays([...days, day ])
    }
    const onSubmitClass = ( event ) => {
        console.log('New Class')
        event.preventDefault()
        if ( days.length === 0 ){
            console.log('Days is empty')
            return
        }
        const newClass = {
            name: event.target.form[0].value,
            teacher: event.target.form[1].value,
            group: event.target.form[2].value,
            days: days,
            dificulty: event.target.form[7].value,
            priority: event.target.form[8].value,
            id: Math.floor(Math.random() * 10000) + 1
        }
        for( let key in newClass ){
            if( newClass[key] === '' ){
                console.log(`The ${key} is empty`)
                return
            }
        }
        onAddMateria(newClass)
        setDays([])
        console.log(newClass)
    }
    const onAllMateriasTest = ( event ) => {
        event.preventDefault()
        onAllMaterias()
    }
  return (
    <>
    <form >
        <div className='principalCharacteristics'>
        <input type="text" placeholder='Name of class'/>
        <input type="text" placeholder='Name of teacher'/>
        <input type="text" placeholder='Group'/>
        <label htmlFor="Days"> Days </label>
        <select name='Days'>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
        </select>
        <input type='time' placeholder='Start Class'/>
        <input type='time' placeholder='End Class'/>
        <button onClick={ onAddDay }>Add Day</button>
        </div>
        <div>
        <label htmlFor="Dificulty"> Dificulty </label>
        <select className='dificultyAndPriorityHtml'>
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
        </select>
        <label htmlFor="Priority"> Priority </label>
        <select>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
        </select>
        </div>
        <input type='submit' value='New Class' onClick={ onSubmitClass }/>
        <button onClick={ onAllMateriasTest }>Test Button </button>
    </form>
    </>
  )
}
