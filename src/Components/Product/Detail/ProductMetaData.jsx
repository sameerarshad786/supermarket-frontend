import React from 'react'

const ProductMetaData = ({ product }) => {
  return (
    <div className='meta-data-container'>
      <div className='product-data'>
          <div dangerouslySetInnerHTML={{__html: `${product.description}`}}></div><br />
          <div dangerouslySetInnerHTML={{__html: `${product.html}`}}></div>
      </div>
    </div>
  )
}

export default ProductMetaData
