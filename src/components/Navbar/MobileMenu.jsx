import React from 'react'

const MobileMenu = ({planets,showMobile,setCounter}) => {

  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-menu"}>
        <ul className="mobile-planets-list">
        {planets.map(p=>(
            <li onClick={()=>setCounter(p.id-1)} className="mobile-planet-item" key={p.id}>
                <div className="mobile-left-flex">
                <div style={{backgroundColor:`var(${p.color}`}} className="mobile-planet-circle"></div>
                <h3 className="mobile-h3">{p.name}</h3>
                </div>
                <img src="./assets/icon-chevron.svg" className="mobile-chevron"/>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default MobileMenu