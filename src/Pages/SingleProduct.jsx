import React from 'react'
import SingleHero from '../Components/SingleProduct/SingleHero'
import Description from '../Components/SingleProduct/Description';
import RelatedProducts from '../Components/SingleProduct/RelatedProducts';

const SingleProduct = () => {
  return (
    <div>
        <SingleHero/>
        <Description/>
        <RelatedProducts/>
    </div>
  )
}

export default SingleProduct;