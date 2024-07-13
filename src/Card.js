import React from "react";  
import { motion, spring } from "framer-motion"



export const Card= ({name, email, message})=>{


    return(

        <motion.div initial={{opacity:0, scale:0.5}} whileHover={{scale:1.1}} whileInView={{opacity:1, scale:1}} transition={10}

         className="relative w-full mx-auto h-full font-mono  ">

            <div className="absolute w-full bg-white h-full left-2 top-2 rounded-xl z-10">
            
            </div>


            <div className="0 relative z-20 w-full bg-red-300 mx-auto flex flex-col gap-4 p-4 text-black border border-black rounded-xl ">



            <div className="flex flex-row justify-between text-xl gap-4">
                <div></div>
                <div>{email}</div>
            </div>

            <div className="text-2xl">{name}</div>
            

            <div className="text-lg">{message}</div>



        </div>

        </motion.div>
        
    )
}