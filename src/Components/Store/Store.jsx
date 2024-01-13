import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchStore from '../../Utils/Store/FetchStore'
import Product from '../Product/Product';

const StoreDetail = ({ accessToken }) => {
    let { storeId } = useParams();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        FetchStore(accessToken, setItem, setIsLoading, storeId)
    }, [accessToken, setItem, setIsLoading, storeId])

  return (
    <section className='store-detail-container'>
        {isLoading ? (
            <p>loading</p>
        ) : (
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div className='store-container'>
                    <img className='store-cover-photo' src={item.cover_photo} alt={item.name} />
                    <div className='store-content'>
                        <img className='store-main-photo' src={item.main_photo} alt={item.name} />
                        <span className='store-name'>{item.name}</span>
                    </div>
                </div>
                <section className='store-product-container'>
                    <ul className='product'>
                        {item.product.map((product, index) => 
                        <Product
                            key={index}
                            accessToken={accessToken}
                            product={product}
                            on_cart={product.on_cart}
                        />
                        )}
                    </ul>
                </section>
            </div>
        )}
    </section>
  )
}

export default StoreDetail
