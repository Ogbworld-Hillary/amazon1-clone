import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home_container">
            <img 
               className="home_image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB665379733_.jpg" alt="" 
            />
            
            <div className="home_row">
                <Product 
                  id="#123456"
                  title="The Midnight Library: The No.1 Sunday Times bestseller and worldwide phenomenon Paperback "
                  price={29.99} 
                  image="https://images-na.ssl-images-amazon.com/images/I/41-8Rr1ATzS._SX323_BO1,204,203,200_.jpg"
                  rating={4}
                />
                 <Product 
                  id="#123445"
                  title="Fast & Furious 7
                  Continuing the global exploits in the franchise built on speed"
                  price={20.99} 
                  image="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cdd3b11a291e064877d7489d54c52a00ad0a770a0f034c29d3f35e4317603fd2._UR1920,1080_RI_SX329_.jpg"
                  rating={4}
                />
                <Product 
                  id="#123477"
                  title="Wireless Eith Noise Cancelling Mic, Built-in Microphonearbuds, Bluetooth Headphones"
                  price={15} 
                  image="https://images-eu.ssl-images-amazon.com/images/I/611ErWw8zyS._AC_UL450_SR450,320_.jpg"
                  rating={2}
                />
        
            </div>
            
            <div className="home_row">
            <Product 
                  id="#123476"
                  title="Tower T17024 Digital Air Fryer Oven with Rapid Air Circulation"
                  price={50} 
                  image="https://m.media-amazon.com/images/I/4164HZF21gL.jpg"
                  rating={5}
                />
                <Product 
                  id="#123478"
                  title="Water Shoes Mens Womens Barefoot Shoes Aqua Beach Swim Shoes Yoga Quick Drying"
                  price={22.99} 
                  image="https://m.media-amazon.com/images/I/513DU2qsitL._SY500_.jpg"
                  rating={4}
                />
                <Product 
                  id="#123499"
                  title="Philips OneBlade Hybrid Body and Face Stubble Trimmer with 4 x Lengths, 1 Extra Blade and Travel Pouch"
                  price={39} 
                  image="https://m.media-amazon.com/images/I/51NN52rLWOL.jpg"
                  rating={7}
                />
                
            </div>
            
             <div className="home_row"> 
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
                 <Product
                   id="4903850"
                   title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                   price={199.99}
                   rating={3}
                   image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                  />
                  <Product
                   id="23445930"
                   title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                   price={98.99}
                   rating={5}
                   image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                 />
                 
                 
               </div>
            
            <div className="home_row">
            <Product 
                  id="#123470"
                  title="COMHOMA Office Desk Chair with Armrest Office Computer Chairs Ergonomic Conference Executive Manager Work Chair"
                  price={62.5} 
                  image="https://m.media-amazon.com/images/I/41e+dmJZ4FL._SY500_.jpg"
                  rating={9}
                />
                <Product 
                  id="#123433"
                  title="WiFi Projector, ELEPHAS 2021 WiFi Mini Projector with Synchronize Smartphone Screen, 1080P HD Portable Projector"
                  price={79.99} 
                  image="https://m.media-amazon.com/images/I/51bDsWSI3IL._SY500_.jpg"
                  rating={10}
                />
                <Product
                   id="3254354345"
                   title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                   price={598.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                 />
            </div>
            <div className="home_row">
            <Product 
                  id="#123481"
                  title="Screen Home Cinema 233X139Cm (100 '') 16: 9 Mobile Projector Screen Easy Installation And Operation Suitable For Home Cinema And Outdoor Projection Screen"
                  price={400} 
                  image="https://m.media-amazon.com/images/I/71qTM18kcfL._AC_SX679_.jpg"
                  rating={11}
                />
                <Product
                   id="90829332"
                   title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                   price={1094.98}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
          </div>  
        </div>
    );
}

export default Home;

