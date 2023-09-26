import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>Que Opinan Nuestros 
        <span className='text-violet-600'> Clientes?</span>
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>Lea estas historias genuinas de nuestros clientes satisfechos sobre sus
        experiencias excepcionales con nosotros.</p>
      
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews