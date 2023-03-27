import React from 'react'

export default function Params({ onGenerateHorary }) {
    const onSubmitParams = ( event ) => {
        event.preventDefault();
        console.log('New Params');
        onGenerateHorary(event.target.form[0].value);
    }
    return (
    <>
    <form>
        <label htmlFor="Params"> Parametros </label>
        <select>
            <option value='Time'>Time</option>
            <option value='Medium'>Medium</option>
            <option value='Dificulty'>Dificulty</option>
        </select>
        <button onClick={ onSubmitParams }> Generate Horary </button>
    </form>
    </>
  )
}
