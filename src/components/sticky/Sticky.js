import React,{useState} from 'react'
import './Sticky.css'

export default function Sticky() {

    const [click,setclick] = useState(true);
    const [sticky,setSticky] = useState(true);

    const toggle = () => setclick(!click);

  return (
    <div className='navbar fade-in-nav'>
      <div className='sticky'>
        <div>
          <div className='sticky-menu-flex'>
            <div className='sticky-menu' onClick={toggle}><b>☰</b></div>
            <div className='sticky-name'>
              <p><b>NETHRA <br />COLLEGE</b></p>
            </div>
          </div>
        </div>
        <div className={click ? 'sticky-hidden' : 'sticky-unhidden'}>
          <ul>
            <a className='active'><li><b>HOME</b></li></a>
            <a><li><b>ABOUT US</b></li></a>
            <a><li><b>COURSE OFFERED</b></li></a>
            <a><li><b>INFRASTRUCTURE</b></li></a>
            <a><li><b>FACILITIES</b></li></a>
            <a><li><b>NEWS&EVENTS</b></li></a>
            <a><li><b>GALLERY</b></li></a>
            <a><li><b>CONTACT US</b></li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}
