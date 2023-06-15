import React, { useEffect } from 'react'
import { generateSchedule  } from '../functions/generateSchedule'
import '../css/calender.css'
export default function Calender({ items, params }) {
  console.log(items)
  console.log(params)
  generateSchedule(items, params)
  return (
    <div>Calender</div>
  )
}
