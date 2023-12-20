import React,{ useState }  from 'react'
import logo from './images/logo.jpg'
import './Navbar.css'

export default function Navbar() {

  const [click,setclick] = useState(true);

  const toggle = () => setclick(!click);
  
  return (
    <div className='top'>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='contact'>
          <div>
            {/* <div></div> */}
            <span className='p'>CONTACT US</span><br />
            <p className='second'>+91 72009 99431</p>
          </div>
          <div>
            {/* <div></div> */}
            <span className='p'>AU/DCP/872</span><br />
            <p className='second'>Approved By Alagappa University</p>
          </div>
        </div>
      </div>
      <nav className={click ? 'unsticky' : 'toggle-space'}>
        <div>
          <div className='menu-flex'>
            <div className='menu' onClick={toggle}><b>☰</b></div>
            <div className='name'>
              <p><b>NETHRA <br />COLLEGE</b></p>
            </div>
          </div>
        </div>
        <div className={click ? 'hidden' : 'unhidden'}>
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
      </nav>
    </div>
  )
  }