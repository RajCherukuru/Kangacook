import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";



export const Contact= ()=>{


    const {register, handleSubmit, reset}= useForm();

    

    const onSubmit= async (data)=>{
        try {
            const response = await axios.post("example.com", data);
            console.log('Data successfully sent:', response.data);
            reset();
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }
    

    return(
        <div className="w-2/3 mx-auto flex flex-col gap-9">

        <div className="text-5xl text-white font-bold flex flex-row gap-3 mx-auto">
            <motion.div initial={{x:-100}} whileInView={{x:0}}  >
            Contact
            </motion.div>

            <motion.div initial={{x:100}} whileInView={{x:0}} >
                US !
            </motion.div>
        </div>

            <form onSubmit={handleSubmit(onSubmit)} method="POST"  className=" flex flex-col gap-5 items-center justify-center">
            

                <div className="flex flex-col gap-5 ">

                    <label className="">
                        <input name="name" {...register("name")}  size={50} className="rounded-full" type="text" placeholder="Name"></input>
                    </label>

                    <label>
                        <input name="email" {...register("email")} size={50} className="rounded-full"  type="email" placeholder="Email"></input>
                    </label>

                    <label>
                        <textarea name="message" {...register("message")} rows="10" cols="50" className="rounded-lg"  placeholder="Message"></textarea>
                    </label>

                    

                </div>

                <button type="submit" className="bg-white p-2 rounded-lg ">Submit</button>
                

            </form>


        </div>
    )
}