
import React from "react"
import { IoMdHome } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";


export const Navbar= ()=>{
    return(
        <div className=' flex flex-row justify-around p-5'>

              <img className='' width={350} height={100} src='https://kangacook.com/assets/kangacook_logo_en-C6XaWo8m.svg' ></img>

              <div className='flex flex-row gap-5 items-center justify-center font-bold text-xl'>
                  <div className='flex flex-row items-center gap-1'>
                  <IoMdHome size={25} />
                    <NavLink to="/">Home</NavLink>
                  </div>

                  <div className='flex flex-row items-center gap-1'>
                  <AiFillQuestionCircle size={25} />
                    <NavLink to="/contact">Contact US</NavLink>
                  </div>
              </div>

          </div>
    )
}