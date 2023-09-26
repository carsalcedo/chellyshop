import React from 'react'
import { arrowRight } from "../assets/icons";
import { promocion } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
    <div className='flex-1'>
      <img
        src={promocion}
        alt='Shoe Promotion'
        width={773}
        height={687}
        className='object-contain w-full rounded-xl'
      />
    </div>
    <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl font-palanquin font-bold'>
        <span className='text-violet-600'>Proximamente </span>
        Stand en Jago Fest
      </h2>
      <p className='mt-4 info-text'>
        El proximo 21 de Octubre del 2023 estaremos presentes en el Jago Fest, Evento Otaku que se realizará en la ciudad de Cumaná 
        Estado Sucre. Ofreciendoles lo mejor de nuestra mercancia en peluches y figuras de sus personajes favoritos
      </p>
      <p className='mt-6 info-text'>
        Desde ya pueden contactarnos y solicitar pedidos para ese dia y retirarlos durante el evento. Nosotros estaremos gustos de recibir sus encargos.
        El evento se realizrá en el Salon de FUNDACITE Urb. Villa Cristobal Colón, via El Peñon.
      </p>
      <div className='mt-11 flex flex-wrap gap-4'>
        <Button label='Encargar ahora' iconURL={arrowRight} />
        <Button
          label='Saber Más'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
        />
      </div>
    </div>
  </section>
  )
}

export default SpecialOffer