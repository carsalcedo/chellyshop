import React from 'react'
import { Navi } from './components'

import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections'

const App = () => {
  return (
    <main className='relative'>
     <Navi/>
      {/* <section className='padding'>*/}
      <section className='xl:padding-l padding wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-violet-900 padding-x padding-t pb-8'>
        <Footer/>
      </section>

    </main>
  )
}

export default App