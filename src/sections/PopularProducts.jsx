import PopularProductCard from "../components/PopularProductCard"
import { productsP } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Nuestros 
          <span className="text-violet-600"> Populares</span> Productos
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Ofrecemos la mejor calidad en peluches, hechos desde casa, resistentes, adorables y excelente diseño. Descubre un mundo de variedades con nosotros</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {productsP.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts