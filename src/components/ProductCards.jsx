import React from 'react'

const ProductCards = ({ title, thumbnailImage, productId, price, description }) => {
    return (
        <div className='bg-slate-800 rounded-lg max-w-72 cursor-pointer'>
            <img className='w-72 h-40 rounded-t-lg' key={productId} src={thumbnailImage} alt={title} />
            <div className='py-2 px-4'>
                <div className='w-full flex items-start justify-between'>
                    <h3 className='text-slate-300 font-semibold word-wrap w-48 capitalize truncate'>{title}</h3>
                    <p className='text-slate-300 font-normal'>${price}</p>
                </div>
                <div className='w-64 pt-1'>
                    <p className='text-slate-400 font-light truncate'>{description}</p>
                </div>
                <div className='flex justify-between w-full py-2 pt-5 gap-3'>
                    <button className='w-1/2 bg-slate-700 text-white hover:bg-slate-600 py-3 rounded-md text-sm font-semibold'>Add to Cart</button>
                    <button className='buyNowBtn w-1/2 bg-slate-700 text-white py-3 rounded-md text-sm font-semibold'>Buy Now</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCards