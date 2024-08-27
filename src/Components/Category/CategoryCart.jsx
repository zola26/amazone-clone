import React from 'react'
import classes from './category.module.css'
const CategoryCart = ({data}) => {
  return (
    <div className={classes.category}>
      <a href="/">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCart
