import React from 'react'
import './About.css'
import Downloan from './images/Download.png'
import Marquee from "react-fast-marquee"

export default function About() {
  return (
    <div className='about-Container'>
      <div>
        <div>
            <h2>WHAT IS <b className='bgBlue'>OPTOMETRY?</b></h2>
            <p><b>The World Council of Optometry (WCO)</b> defines Optometry is a healthcare profession that is autonomous, educated, 
                and regulated (licensed or registered), and optometrists are the primary healthcare practitioners of the eye and
                visual system who provide comprehensive eye and vision care, which includes refraction and dispensing, 
                detection/diagnosis and management of disease in the eye, and the rehabilitation of conditions of the visual system.
            </p>
        </div>
        <div className='about-Container-2'>
            <div className='container-flex'>
                <div className='paras'>
                    <p>The Course, Optometry is an innovative and multidisciplinary programme in Medical field based 
                        on human needs and is structured to make educational sense to students and to develop skills 
                        for immediate employability in health industry.
                    </p>
                    <p>Our aim is to provide vision care services to the community at a very minimum cost & thereby play 
                        a major role in eradicating preventable blindness from the society.
                    </p>
                    <p>We started as a dream project, when a group of like minded eye care professionals decided to create 
                        an institution to ensure a deep and lasting impact on the ongoing war against blindness in India. 
                        There is a desperate need for a proper comprehensive eye care examination and Nethra institute of 
                        optometry has been dedicated to creating well trained and highly competent optometrists in the country 
                        to accomplish eradicating avoidable blindness.
                    </p>
                    <p>We are purely a devoted optometry institute and are led by a team of experienced optometrists and 
                        ophthalmologists. We would sincerely like to thank our well wishers who have supported us creating 
                        an institute where motivated students and dedicated faculties create a wonderful optometric atmosphere.
                    </p>
                </div>
                <div className='border-box'>
                    <h2>Application</h2>
                    <div className='download-img'>
                        <img src={Downloan} alt='' />
                    </div>
                    <h2>News & Events</h2>
                    <div className='marquee'>
                        <Marquee >
                            <p>Admission open for 2023-2024<br></br>
                                Online Application available
                            </p>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
