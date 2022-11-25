import { useState, useEffect } from 'react'
import {Navbar,MainSection,StatsRow} from "./components"
import './App.css'

function App() {
  const [planetData, setPlanetData] = useState([]);
  const [currData, setCurrData] = useState({})
  const [counter,setCounter] = useState(0)
  const metaData=[
        
    {id:1,color:"--white"},
    {id:2,color:"--lightorange"},
    {id:3,color:"--blue"},
    {id:4,color:"--red"},
    {id:5,color:"--white"},
    {id:6,color:"--lightorange"},
    {id:7,color:"--teal"},
    {id:8,color:"--lightblue"},
   

]

  useEffect(()=>{

    fetchData()
  },[counter]);

  async function fetchData(){

    let res = await fetch("data.json");
    let data = await res.json();
    data = data.map((d,idx)=>({...metaData[idx],...d}))
   
    setPlanetData(data);
    console.log(planetData)
    setCurrData(data[counter]);
  
  }

  return (
    <div className="app">
    <Navbar setCounter={setCounter} planets={planetData}/>
    {/* {counter} */}
    {currData?.name &&

    <div className="main-content">
    <MainSection currData={currData}/>
    <StatsRow currData={currData}/>
      
    </div>
}
    </div>
  )
}

export default App
