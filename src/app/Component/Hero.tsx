import React from 'react'

const Hero = () => {
  return (
    <div>
          {/* <div id="hero" className='  min-h-screen bg-no-repeat bg-[url(/burger1.jpg)]'></div> */}
          <h1 className='font-bold text-5xl  text-center text-gray-950'>Delious Fast Food Deliver Hot & Fresh</h1>
          <div >
            <button>Order Now</button>
          </div>
          <h1 className= 'font-bold text-3xl   text-gray-950 '>Our menu</h1>
          
          <div className='min-h-screen bg-no-repeat bg-[url(/Burger5.jpg)] align-center text-black' ></div>
          <div className=' text-1xl '>
          <h3 >Burger</h3>
            <p>juicy grilled burger with fresh ingrediants</p>
            <span>$5.99</span>
            </div>
          
          <div className='min-h-screen bg-no-repeat bg-[url(/Roll2.jpg)] align-center text-black'>
            </div>
            <div className=' text-1xl '>
          <h3 >Roll</h3>
            <p>yummy and crispy chatni roll</p>
            <span>$7.99</span>

            <h3 className=''>
              <li><a href='#'>contact: 03xxxxxx</a></li>
              <li><a href='#'>email:xyz@GMAIL.COM</a></li>
            </h3>
            </div>

            

      
      </div>
    
  )
}

export default Hero