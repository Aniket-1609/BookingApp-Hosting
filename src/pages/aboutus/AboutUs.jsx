import React from 'react'
import './AboutUs.css'
import home1 from '../../image/home1.jpg'
import home2 from '../../image/home2.jpg'
import home3 from '../../image/home3.jpg'
import home4 from '../../image/home4.jpg'
import a1 from '../../image/a1.jpg'
import a2 from '../../image/a2.jpg'
import r1 from '../../image/r1.jpg'
import r2 from '../../image/r2.jpg'
import r3 from '../../image/r3.jpg'
import c from '../../image/c.jpg'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import SlideShow from '../../components/imageslider/Slideshow'



const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      {/* home section */}
      <section class="home" id="home">
        <div class="head_container">
            <div class="box">
                <div class="text">
                <h1>About Us</h1>
                <p>Offering the most powerful portfolio in the industry, our more than 30 leading brands and nearly 8,900 properties in 141 countries and territories give people more ways to connect, experience and expand their world.</p>
                </div>
            </div>
            <div class="image">
                <img src={home1} class="slide" alt=''/>
            </div>
            
        </div>
      </section>

      {/* welcome section */}
     <section class="about" id="about">
    <div class="container1 flex">
      <div class="left">
        <div class="img">
          <img src={a1} alt="" class="image1"/>
          <img src={a2} alt="" class="image2"/>
        </div>
      </div>
      <div class="right">
        <div class="heading">
          <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
          <h2>Welcome to Advice My Holiday</h2>
          <p>Diversity and inclusion is fundamental to our core values and strategic business goals. Taking care of people and their well-being is our most precious cultural inheritance. </p>
          <p>Guided by our sustainability and social impact platform, Serve 360: Doing Good in Every Direction. We commit to creating positive and sustainable impact wherever we do business</p>
          
        </div>
      </div>
    </div>
      </section>

      {/* our amenities section */}
      <section class="wrapper top">
        <div class="container">
          <div class="text">
            <h2>Our Amenities</h2>
            <p>Welcome to Our Hotel Booking Platform, your premier destination for hassle-free and memorable travel experiences. Our services are designed to cater to every travelers needs, ensuring a seamless journey from booking to check-out.</p>

            <div class="content">
              <div class="box flex">
                <i class="fas fa-swimming-pool"></i>
                <span>Swimming pool</span>
              </div>
              <div class="box flex">
                <i class="fas fa-dumbbell"></i>
                <span>Gym & yogo</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Spa & massage</span>
              </div>
              <div class="box flex">
                <i class="fas fa-ship"></i>
                <span>Boat Tours</span>
              </div>
              <div class="box flex">
                <i class="fas fa-swimmer"></i>
                <span>Surfing Lessons</span>
              </div>
              <div class="box flex">
                <i class="fas fa-microphone"></i>
                <span>Conference room</span>
              </div>
              <div class="box flex">
                <i class="fas fa-water"></i>
                <span>Diving & smorking</span>
              </div>
              <div class="box flex">
                <i class="fas fa-umbrella-beach"></i>
                <span>Private Beach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* rooms n suites */}
      <section class="room top" id="room">
        <div class="container flex2">
          
          <div class="heading_top">
            <div class="heading">
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Rooms $ Suites</h2>
            </div>
          </div>

          <div class="content new1">
            <div class="box">
              <div class="img">
                <img src={r1} alt=""/>
              </div>
              <div class="text">
                <h3>Superior Soble Rooms</h3>
                <p> <span>$</span>129 <span>/per night</span> </p>
              </div>
            </div>
            <div class="box">
              <div class="img">
                <img src={r2} alt=""/>
              </div>
              <div class="text">
                <h3>Superior Soble Rooms</h3>
                <p> <span>$</span>129 <span>/per night</span> </p>
              </div>
            </div>
            <div class="box">
              <div class="img">
                <img src={r3} alt=""/>
              </div>
              <div class="text">
                <h3>Superior Soble Rooms</h3>
                <p> <span>$</span>129 <span>/per night</span> </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="wrapper wrapper2 top">
        <div class="container">
          <div class="text">
            <div class="heading">
              <h5>AT THE HEART OF COMMUNICATION</h5>
              <h2>People Say</h2>
            </div>

            <div class="para">
              <p>Best cost benefit lodging in San Francisco Downtown for Conferences, Tourism, and etc. Great for families, private ensuite rooms, coffee break, happy hour, pub crawl.The location was very optimal providing easy access to his and train stations. The rooms were really clean and so is the whole object. Check in was simple and personal were really friendly. </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section class="gallary mtop " id="gallary">
      <div class="container2">
        <div class="heading_top flex1">
          <div class="heading new5">
            <h5>WELCOME TO OUR PHOTO GALLERY</h5>
            <h2>Photo Gallery of Our Hotel</h2>
            <p>With venues open around the clock and a walkable collection of some of America’s most iconic sights, you’ll never run out of things to do here. Duck into world-class museums and upscale shops. And don’t miss Times Square, home to virtually every Broadway theater, a mind-boggling number of neon lights and tons of restaurants and nightclubs.</p>
          </div>
        </div>
          
        <SlideShow/>
        

      </div>
      </section>

      <MailList/>
      <Footer/>
  
    </div>
  )
}

export default AboutUs
