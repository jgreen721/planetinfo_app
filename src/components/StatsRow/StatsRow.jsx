import React from 'react'
import "./StatsRow.css"

const StatsRow = ({currData}) => {
    console.log(currData)
  return (
    <ul className="stats-row">
        <li className="stat-card">
            <p className="stat-category">Rotation Time</p>
            <h1 className="stat-h1">{currData.rotation}</h1>
        </li>
        <li className="stat-card">
            <p className="stat-category">Revolution Time</p>
            <h1 className="stat-h1">{currData.revolution}</h1>
        </li>
        <li className="stat-card">
            <p className="stat-category">Radius</p>
            <h1 className="stat-h1">{currData.radius}</h1>
        </li>
        <li className="stat-card">
            <p className="stat-category">Average Temp.</p>
            <h1 className="stat-h1">{currData.temperature}</h1>
        </li>
    </ul>
  )
}

export default StatsRow