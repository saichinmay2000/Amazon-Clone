import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img
          className='header_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
        
        <div
        className='header_search'>
            <input 
            className='header_searchinput'
            type="text"
            />
            <SearchIcon className='header_searchicon'/>
        </div>

        <div className='header_nav'>

          <div className='header_option'>
              <span className='header_optionLineOne'>Hello, Sign in</span>
              <span className='header_optionLineTwo'>Accounts & Lists</span>
          </div>

          <div className='header_option'>
              <span className='header_optionLineOne'>Returns</span>
              <span className='header_optionLineTwo'>& Orders</span>
          </div>

          <div className='header_option'>
              <span className='header_optionLineOne'>Your</span>
              <span className='header_optionLineTwo'>Prime</span>
          </div>

          <Link to="/checkout">
            <div className='header_optionBasket'>
                  <ShoppingBasketIcon className='header_basket'/>
                  <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>
          </Link>
        </div>

    </div>
  )
}

export default Header