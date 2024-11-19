import React from 'react'

import {TbArrowBigUpFilled} from "react-icons/tb"


const Footer = ({nav}) => {

  const date = new Date().getFullYear()

  return (
    <section className=' text-white min-h-0 w-full bg-footer-pattern bg-center bg-cover bg-no-repeat'>
        {nav ? <a href="#home"><div className='bg-[red] w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer hover:bg-black hover:border-2 hover:border-[red]'><TbArrowBigUpFilled /></div></a>  : "none"}
      <div className=' border-t border-[#3e3e3e] max-container pt-10 pb-16 text-[#c4c4c4] text-center px-4'>
        <p className=' font'>Copyright &copy;{date} All rights reserved. </p>
      </div>
    </section>
  )
}

export default Footer