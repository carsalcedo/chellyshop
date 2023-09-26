import React from 'react'
import { appa1 } from '../assets/images';
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
            Hacemos el
            <span className='text-violet-600'> Super </span>
            <span className='text-violet-600'>Diseño </span> de tu preferencia
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Diseñamos y confeccionamos cualquier modelo de peluche, del personaje de tu preferencia
            y del tamaño que mas gustes
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Dedicamos mucho esfuerzo y detalle en nuestro trabajo para complacerte.
          </p>
          <div className='mt-11'>
            <Button label='Ver más' />
          </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={appa1}
          alt='product detail'
          width={480}
          height={500}
          className='object-contain'
        />
      </div>

    </section>
  )
}

export default SuperQuality