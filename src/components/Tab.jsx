import React, {useState} from 'react'
import '../styles/Tab.css'

function Tab({index, path, isSelected, name, handleTabClick}) {
  return (
    <div className="tab" onClick={() => handleTabClick(index)} style={ isSelected ? {backgroundImage: 'linear-gradient(to right, #605BFF -100% , white 30%)'} : {backgroundColor: 'white'}} >
      <svg width='20' height='20' viewBox='0 0 20 20' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d={path} fill={isSelected ? "#605BFF" : "#9A9AA9"}/>
      </svg>
      <span className="tab-text" style={{color: isSelected ? "#605BFF" : "#9A9AA9"}}>
        {name}
      </span>
    </div>
  )
}

export default Tab