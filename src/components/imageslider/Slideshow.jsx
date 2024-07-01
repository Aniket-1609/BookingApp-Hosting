import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'contain',
//   height: '400px'
  
// }
const slideImages = [
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717941341/ripqlbd2dyjzimjpns3z.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717941341/enoonkk5obzc5xai5mkt.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717940947/enjsikcmekgspjosompe.avif',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717940739/byaf8cxvdybqepfox1l7.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717922643/nkravbnrwt0y0mwn6sva.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1717922643/qowwcfg4et3v4xkixzbq.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1718099826/r1_h2t1dz.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1718099832/r3_ssspda.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dbd4uqlfw/image/upload/v1718099826/home1_rlczlv.jpg',
  },
    
  
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div 
              style={{
                 'backgroundImage': `url(${slideImage.url})` }} className='image'>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow