import React from 'react'
import "./componentcss/css/style.min.css"
import Navbar from './navbar'
import Footer from './footer'

function Layout(props) {
    return (
      <div className='Layout'>
          <Navbar/>
         { props.children}
         
         
      </div>
    )
  }
  
  export default Layout