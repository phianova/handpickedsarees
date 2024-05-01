"use client";
import React from 'react'

const ProductPage = ({product}) => {
  return (
    <div className="absolute top-1/4 w-8/12 mx-auto flex flex-col">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} width={300} height={300} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <a href="/purchase?product_id={product.id}">Buy now</a>
    </div>
  )
}

export default ProductPage