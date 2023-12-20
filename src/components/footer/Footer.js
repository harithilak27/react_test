import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='footer-flex'>
            <div>
                <p>CONNECT WITH US : ||||</p>
            </div>
            <div>
                <div>
                    <div className='input-box'>
                        <input type={'email'} placeholder='Enter your Email Address' className='email' /> 
                        <button type='button' placeholder='Subscribe Now' className='btn'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p>Copyright © NETHRA COLLEGE 2019. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
