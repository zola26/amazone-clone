import React from 'react'
import {categoryInfos} from './categoryFullInfos'
import CategoryCart from "./CategoryCart";
import classes from './category.module.css'
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCart data={infos} />
      ))}
    </section>
  );}

export default Category
