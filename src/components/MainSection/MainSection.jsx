import React, {useState} from 'react'
import "./MainSection.css"

const MainSection = ({currData}) => {
  const [images,setImages] = useState([{id:1,img:currData.images.planet},{id:2,img:currData.images.internal},{id:3,img:currData.images.geology}]);
  const [counter,setCounter] = useState(0)
  if(!currData?.name)return "Loading..."
  return (
    <div className="main-section">
      <h4>{images[counter].id}</h4>
      <div className="mobile-slider">
        <div className="slider-col">
          <h3 onClick={()=>setCounter(0)} className="mobile-slider-h3">Overview</h3>
        </div>
        <div className="slider-col center">
          <h3 onClick={()=>setCounter(1)} className="mobile-slider-h3" >Structure</h3>
        </div>
        <div className="slider-col end">
          <h3 onClick={()=>setCounter(2)} className="mobile-slider-h3">Surface</h3>
        </div>
      </div>
      <div className="col-left">
        <img className="planet-img" style={{color:"purple",fontSize:'3rem'}} src={images[counter].img} />
      </div>
      <div className="col-right">
        <div className="info-card">
          <div className="info-col">
        <h1 className="main-h1">{currData.name}</h1>
        <p className="main-blurb">{currData.overview.content}</p>
        <a target="_blank" href={`https://en.wikipedia.org/wiki/${currData.name}`} className="source-link">Source: <span className="underline">Wikipedia</span><img className="source-icon" src="./assets/icon-source.svg"></img></a>
        </div>

        <div className="info-col">
        <ul className="button-list">
          <button onClick={()=>setCounter(0)} data-color="green" className="btn info-btn"><span className="light">01</span> <span className="btn-txt">Overview</span></button>
          <button onClick={()=>setCounter(1)}  className="btn info-btn"><span className="light">02</span> <span className="btn-txt">Internal Structure</span></button>
          <button onClick={()=>setCounter(2)} className="btn info-btn"><span className="light">03</span> <span className="btn-txt">Surface Geology</span></button>
        </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection