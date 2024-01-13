import React from 'react'

const Reviews = ({ review }) => {
  // dda577bc-0b07-41af-bc66-7f995dbd5ec3

  console.log(review)

  return (
    <li className='review-instance'>
      <div className='reviewer'>
        <div>
          <img className='reviewer-picture' src={review.picture} alt={review.name} />
          <span>{review.name}</span>
        </div>
        <p>{review.review}</p>
      </div>
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
