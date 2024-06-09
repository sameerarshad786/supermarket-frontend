import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from "./Reviews"
import ProductMetaData from './ProductMetaData'
import QuestionAnswer from './QuestionAnswer'


const Detail = ({ accessToken, product, store, setItem }) => {
    const [rotate, setRotate] = useState(false)
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    useEffect(() => {
        const fetchData = async () => {
            if (rotate) {
                try {
                    const response = await fetch(`${process.env.REACT_APP_SERVER}products/reload/${product.id}/`, {
                        method: 'put',
                        headers: headers,
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setItem(data);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setRotate(false);
                }
            }
        };

        fetchData();
    }, [rotate, setRotate, setItem, accessToken, product.id, headers]);

    return (
        <div className='detail-section'>
            <a href={product.url} target="_blank" rel="noreferrer">
                <img
                title={product.url}
                className="detail-source-icon"
                src={require(`../../../Assets/${product.by}.ico`)}
                alt={`${product.by} icon`}
                width="35px"
                height="35px"
                />
            </a>
            <img
                className='detail-image'
                src={product.images[0]}
                alt={product.name} 
            />
            <div className='content'>
                <p>{product.name}</p><br />
                {/* <p>{product.description}</p> */}
                <span>
                    <p>
                    Price: {product.price.lower} $
                    {product.price.upper !== null &&
                        ` to ${product.price.upper} $`}
                    </p>
                </span>
                <span>Discount: {product.discount}%</span><br />
                <span>Brand: {product.brand.name}</span><br />
                {product.condition !== "not defined" ? <span>Condtion {product.condition}</span>:""}
                <span>Rating: {product.ratings}</span>
            </div>
            <button title='reload' onClick={() => setRotate(true)}>
                <svg 
                    className={`reload-details ${rotate ? 'rotate-animation' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                >
                    <path d="M481.662-180.001q-124.748 0-212.435-87.67-87.687-87.669-87.687-212.268t87.687-212.329q87.687-87.731 212.312-87.731 81.922 0 145.153 35.654 63.231 35.654 106.384 97.578v-133.232h45.384v225.537H552.924v-45.384h157.999q-36.077-60.769-94.692-97.769-58.616-37-134.692-37-106.757 0-180.686 73.916t-73.929 180.654q0 106.737 73.971 180.699 73.971 73.961 180.787 73.961 81.318 0 148.395-46.538 67.077-46.539 93.692-123h46.999q-27.846 96.922-107.964 155.922-80.117 59-181.142 59Z"/>
                </svg>
            </button>
            {Object.keys(store).length > 0 ? <div>
                <a href={`/store/${store.id}/`} className='visit-store'>
                    Visit store
                </a>
            </div> : null}
        </div>
    )
}


const ProductDetail = ({ accessToken }) => {
    let { productId } = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${process.env.REACT_APP_SERVER}products/retrieve/${productId}/`, {
                headers: headers
        });

        if (response.ok) {
            const data = await response.json()
            setItem(data)
            setIsLoading(false)
        }
    }

        fetchData();
    }, [productId, setItem])

  return (
    <section className='product-detail-container'>
        {
            isLoading ?
            <p style={{ textAlign: "center", margin: "2em 0" }}>loading...</p>:
            <div>
                <Detail accessToken={accessToken} product={item} store={item.store} setItem={setItem} />
                {item.description && <ProductMetaData product={item} />}
                {Array.isArray(item.reviews) && item.reviews.length > 0 ? (
                    <ul className='review-container'>
                        <h4 style={{ marginBottom: '1.5em' }}>Reviews</h4>
                        {item.reviews.map((review) => (
                            <Reviews key={review.id} review={review} />
                        ))}
                    </ul>
                ) : ""}
                {Array.isArray(item.question_answer) && item.question_answer.length > 0 ? (
                    <ul className='review-container'>
                        <h4 style={{ marginBottom: '1.5em' }}>QNA</h4>
                        {item.question_answer.map((question_answer) => (
                            <QuestionAnswer key={question_answer.id} question_answer={question_answer} />
                        ))}
                    </ul>
                ) : ""}
            </div>
        }
    </section>
  )
}

export default ProductDetail
