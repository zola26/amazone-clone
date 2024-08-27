import React from 'react'
import LayOut from '../../Components/LayOut/LayOut';
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/Category';


const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
    </LayOut>
  );
}

export default Landing
