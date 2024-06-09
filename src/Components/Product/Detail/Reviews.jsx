import React from 'react'

const Reviews = ({ review }) => {

  return (
    <li className='review-instance'>
      <div className='reviewer'>
        <div className='reviewer-info'>
          <img className='reviewer-picture' src={review.picture} alt={review.name} />
          <span>{review.name}</span>
        </div>
        <p>{review.review}</p>
        {/* <span>{review.rating}</span> */}
      </div><br />
      {review.images.length !== 0 ? <div className='review-media'>
          {
            review.images.map((img, index) => (
              <img key={index} src={img} alt={review.review} />
            ))
          }
        </div> : ""}
    </li>
  )
}

export default Reviews
