import React from 'react'
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          All
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registary</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
