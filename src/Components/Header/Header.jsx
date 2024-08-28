import React from 'react'
import classes from "./Header.module.css"
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div>
            <div className={classes.order_container}>
              <Link to="/" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>

              {/* three componenets */}
              <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>
              {/* orders */}
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              <Link  to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header
