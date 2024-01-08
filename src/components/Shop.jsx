import React from 'react'
import ProductCards from './ProductCards';

const Shop = (props) => {
    
    let elementArray = [];

    props.product != undefined && props.product.products.forEach((element) => {
        elementArray.push(<ProductCards title={element.title} thumbnailImage={element.thumbnail} productId={element.id} price={element.price} description={element.description}/>)
    });

    return (
        <>
           <div className='flex flex-wrap gap-5 px-7 py-4'>{elementArray}</div>
        </>
    )
}

export default Shop