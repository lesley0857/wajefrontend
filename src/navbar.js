import React from 'react'
import "./componentcss/javasc"
import  {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const closeref = React.createRef()
const openref = React.createRef()
const navref = React.createRef()

const menuclose =  document.querySelector('#menuclose');
const openmenu =  document.querySelector('#openmenu');
const navmenu =  document.querySelector('.navmenu');
console.log()
function closeMenufunc (){ 
  closeref.current.style.display='none'
  navref.current.style.display='none';
                   openref.current.style.display='flex';
                   
                   }
function openMenufunc (){
  navref.current.style.display='flex';
  openref.current.style.display='none';
  closeref.current.style.display='flex';
}

function Navbar(props) {

                               
  return (
    <div className='nav'>
      <p className='icon'>
        WAJE TEST
        <p id='menuclose' ref={closeref} onClick={closeMenufunc}>X</p>
        <p id='openmenu' ref={openref} onClick={openMenufunc}>OPEN</p>
      </p>
       <ul className='navmenu' ref={navref}>
            <li><Link to='books'>Books</Link></li>
            <li><Link to='/'>Authors</Link></li>
          
        </ul>
    </div>
  )
}

export default Navbar