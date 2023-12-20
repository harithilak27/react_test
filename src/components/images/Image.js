import React, { useState, useEffect } from 'react'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import './Image.css'

export default function Image() {

    const [image,setImage] = useState(img1)

    const images = [img1,img2,img3,img4]


    useEffect(() => {
        const intervalId = setInterval(() => {
            setImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <div>
      <img src={image} alt="" className='image' />
    </div>
  )
}
