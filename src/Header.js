import React, { useState } from 'react'
import logo from "./images/logo.svg"
import CloseIcon from '@mui/icons-material/Close';
import { Style, WidthFull } from '@mui/icons-material';
import { color, style, width } from '@mui/system';
function Header() {
const [getvalue, setgetvalue]=useState(false)  
function togglebtn(e){
  e.preventDefault();
  (getvalue==true)?setgetvalue(false):setgetvalue(true)
}
  
  
  
  return (
    <div>
      <header>
        <div className='logo'>
            <img src={logo} alt=""></img>
        </div>
    
       <ul>
          <li>Modal s</li>
          <li>Modal 3</li>
          <li>Modal X</li>
          <li>Modal Y</li>
          <li>Solar Roof</li>
          <li>Solar pannel</li>
      </ul>
      <ul>
          <li>Shop</li>
          <li>Account</li>
          <li onClick={togglebtn}>Menu</li>
      </ul>
      <div className={`sidebar ${((getvalue == true)? 'active' : '')}`}>
        <div className='cross'>
        <a href="" onClick={togglebtn}><CloseIcon></CloseIcon></a>
        </div>
      <ul >
          <li><a href="">Modal S</a></li>
          <li> <a href="">Modal 3</a></li>
          <li> <a href="">Modal X</a></li>
          <li> <a href="">Modal Y</a></li>
          <li><a href="">Solar Roof</a></li>
          <li><a href="">Solar Panel</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade In</a></li>
          <li><a href="">Test Drive</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
      </ul>
      </div>
      </header>
    </div>
  )
}

export default Header
