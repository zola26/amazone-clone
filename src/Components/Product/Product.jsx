import React, {useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loader from '../Loader/Loader'
import { productUrl } from "../../API/endPoints";
function Product() {
const [products, setProducts] = useState()
const [isLoading, setisLoading] = useState(false);
useEffect (() => {
      setisLoading(true);
      axios
        .get(`${productUrl}/products`)
        .then((res) => {
          setProducts(res.data);
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisLoading(false);
        });
},[])
return (
  <>
    {isLoading?(<Loader />) : (
      <section className={classes.products_container}>
        {
        products?.map((singleProduct) => {
          return (
            <ProductCard
              product={singleProduct}
              key={singleProduct.id}
              ratingcorr={true}
              renderAdd={true}
            />
          );
        })
        }
      </section>
    )}
  </>
);
}
export default Product