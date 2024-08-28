import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './images/data'
import classes from "./carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselEffect() {
  return (
    <div>
            <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} alt='/'/>;
        })}
      </Carousel>
      <div className={classes.hero_img}>
      </div>
    </div>
  )
}

export default CarouselEffect
