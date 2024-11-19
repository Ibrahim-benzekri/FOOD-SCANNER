import React from 'react'

export default function Card({title,desc,price,mod}) {
  return (
    <div className="py-[30px] px-[24px] flex flex-col gap-[32px] w-[310px] h-[365px] rounded-lg border border-primary-orange-light-active bg-slate-100 shadow-[1px_4px_16px_0px_rgba(122,105,100,0.05)]  ">
      <h3 className="font-poppins text-[24px] text-center text-secondary-brown-darker font-medium capitalize">
        {title}
      </h3>
      <p className="font-poppins text-[16px] text-center text-secondary-brown-normal font-medium capitalize">
        {desc}
      </p>
      <h1 className="font-sourceSerif text-[36px] text-center text-secondary-brown-normal font-semibold capitalize">
        ${price}
        <sub className="text-[16px]">/{mod}</sub>
      </h1>
      <button className=' py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm '
      onClick={()=>{
        
      }}
      >
          <div className=' buttonDiv'></div>
          <span className='buttonSpan'>Subscribe</span>
        </button>
    </div>
  )
}
