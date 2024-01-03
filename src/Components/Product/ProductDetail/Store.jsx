import React from 'react'

const ProductDetailStore = ({ store }) => {
  console.log(store)
  return (
    <section className='store-container'>
      <div className='store'>
        <img src={store.cover_photo} alt={store.name} width="100%" />
        <div className='store-content'>
          <img className='reviewer-picture' src={store.main_photo} alt={store.name} />
          <span className='store-name'>{store.name}</span>
        </div>
        <a href={store.url} target='_blank' className='visit-store'>
          Visit store
        </a>
      </div>
    </section>
  )
}

export default ProductDetailStore
