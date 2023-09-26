import React from 'react'

const PelucheCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };


  return (
    <div className={`border-2 rounded-xl ${
      bigShoeImg === imgURL.bigShoe
        ? "border-violet-600"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
  >
       <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='peluches colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>

    </div>
  )
}

export default PelucheCard

//quede en hora 1:38:00