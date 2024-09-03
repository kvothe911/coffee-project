import React from 'react'
import CoffeeSeparator from "../assets/separator/coffeeSeparator.png";
import '/src/App.css'

function Separator() {
  return (
    <div className='mx-auto my-10 items-center'>
        <div className='translate-y-6 mx-auto border-t border-amber-50 h-[2px] max-w-[400px]'></div>
        <img className="relative size-10 mx-auto z-20" src={CoffeeSeparator} alt="Coffee Separator" />
    </div>
  )
}

export default Separator