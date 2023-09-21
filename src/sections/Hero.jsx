import React from 'react'
import { arrowRight } from '../assets/icons'
import { picachu } from '../assets/images'
import { Button } from '../components'
import PelucheCard from '../components/PelucheCard'
import { peluches, statistics } from '../constants'

const Hero = () => {
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-violet-600'>Nuestros Nuevos Productos</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Hermosos Peluches</span>
          <br />
          <span className='text-violet-600 inline-block mt-3'>Pokemon</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Descubre nuestros nuevos productos, peluches esponjosos de tus personajes favoritos</p>
        <Button label="Ver más" iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={picachu} alt="peluches pokemon" width={610} height={500} className='object-contain relative z-10' />

        <div>
          {peluches.map((peluche) =>(
            <div key={peluche}>
              <PelucheCard
                imgURL={peluche}
                changeBigSoheImage=
                {() =>{}}
                bigShoeImg=""/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero