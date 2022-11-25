import React, {useState} from 'react'
import MobileMenu from './MobileMenu'
import "./Navbar.css"

const Navbar = ({planets,setCounter}) => {
  const [showMobile,setShowMobile] = useState(false)
  return (
    <nav className="navbar">
        <h2 className="nav-header">The Planets</h2>
        {/* <div className="nav-right-column"> */}
        <ul className="planet-list">
{planets.map(p=>(
  <li key={p.id} onClick={()=>setCounter(p.id-1)}>
    <h4 className="planet-nav-item">{p.name}</h4>
  </li>
))}
        </ul>
        <img onClick={()=>setShowMobile(!showMobile)} className="burger-icon" src="./assets/icon-hamburger.svg" alt="" />
        {/* </div> */}
        <MobileMenu setCounter={setCounter} showMobile={showMobile} planets={planets}/>
    </nav>
  )
}

export default Navbar