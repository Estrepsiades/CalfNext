import React, { useRef } from 'react'

export default function ClassBar({ onAddMateria }) {
    const onSubmitClass = ( event ) => {
        console.log('New Class')
        event.preventDefault()
        const newClass = {
            name: event.target.form[0].value,
            teacher: event.target.form[1].value,
            group: event.target.form[2].value,
            timeStart: event.target.form[3].value,
            timeEnd: event.target.form[4].value,
            days: event.target.form[5].value,
            dificulty: event.target.form[6].value,
            priority: event.target.form[7].value,
            id: new Date().getMilliseconds()
        }
        for( let key in newClass ){
            if( newClass[key] === '' ){
                console.log(`The ${key} is empty`)
                return
            }
            
        }
        onAddMateria(newClass)
        console.log(newClass)

    }
    //Necesito un select para mutliple dias
  return (
    <>
    <form >
        <input type="text" placeholder='Name of class'/>
        <input type="text" placeholder='Name of teacher'/>
        <input type="text" placeholder='Group'/>
        <input type='time' placeholder='Start Class'/>
        <input type='time' placeholder='End Class'/>
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
        <label htmlFor="Dificulty"> Dificulty </label>
        <select>
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
        <input type='submit' value='New Class' onClick={ onSubmitClass }/>
    </form>
    </>
  )
}
