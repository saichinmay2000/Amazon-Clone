import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            
            <img
                className='home_image' 
                src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg' alt='prime_image'
            />
            
            <div className='home_row'>
                <Product
                    id={1}
                    title='Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)'
                    price={4999}
                    image='https://m.media-amazon.com/images/I/61VMT8H7RvL._SX679_.jpg'
                    rating={5}
                />

                <Product
                    id={2}
                    title='Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2021 release'
                    price={10999}
                    image='https://m.media-amazon.com/images/I/61l7jVcp7vL._SY450_.jpg'
                    rating={5}
                />
                {/* <Product
                    id={3}
                    title='Samsung Galaxy S20 FE 5G Additional Exchange Offers'
                    price={36990}
                    image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY679_.jpg'
                    rating={5}
                /> */}
                
            </div>

            
            <div className='home_row'>
                <Product
                    id={4}
                    title="Introducing Amazon Smart Plug (works with Alexa) - 6A, Easy Set-Up"
                    price={1999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/519HHc4dUBL.jpg"
                />
                <Product
                    id={5}
                     title="All-New Kindle Paperwhite 4G LTE (10th gen)"
                     price={36990}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/610H5B3V6iL._SX679_.jpg"
                />
                {/* <Product
                    id={6}
                     title="Samsung Galaxy S20 FE 5G Additional Exchange Offers"
                     price={36990}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY679_.jpg"
                /> */}
                <Product
                    id={7}
                     title="Samsung Galaxy S20 FE 5G Additional Exchange Offers"
                     price={15000}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY679_.jpg"
                />
            </div>

            <div className='home_row'>
                <Product
                    id={8}
                    title="Echo Show 10- 10.1 HD smart display with motion, premium sound and Alexa (Black)"
                    price={24999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61KVpz9L0gL._SX679_.jpg"
                />
            </div>


        </div>
    </div>
  )
}

export default Home