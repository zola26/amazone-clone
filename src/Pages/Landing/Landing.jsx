import React from 'react'
import LayOut from '../../Components/LayOut/LayOut';
import CarouselEffect from '../../Components/CarouselEffect/Carousel'
import Category from '../../Components/Category/Category';


function Landing(){
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
    </LayOut>
  );
}

export default Landing
