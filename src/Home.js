import React from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";



export const Home= ()=>{


    const data = [
        {
            name: "John Doe",
            email: "johndoe@example.com",
            message: "Hello, this is a test message to check the form submission."
        },
        {
            name: "Jane Smith",
            email: "janesmith@example.com",
            message: "Hi, I am interested in learning more about your services."
        },
        {
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            message: "Good day, I would like to inquire about your pricing."
        },
        {
            name: "Bob Brown",
            email: "bobbrown@example.com",
            message: "Hello, I have some questions regarding your product."
        },
        {
            name: "Charlie Davis",
            email: "charliedavis@example.com",
            message: "Hi, I need support with my account."
        },
        {
            name: "Diana Evans",
            email: "dianaevans@example.com",
            message: "Hello, I would like to give some feedback on your service."
        },
        {
            name: "Edward Foster",
            email: "edwardfoster@example.com",
            message: "Hi, I am having trouble accessing my account."
        },
        {
            name: "Fiona Green",
            email: "fionagreen@example.com",
            message: "Good day, I am interested in partnering with your company."
        },
        {
            name: "George Harris",
            email: "georgeharris@example.com",
            message: "Hello, I need help with a recent order I placed."
        },
        {
            name: "Helen Jackson",
            email: "helenjackson@example.com",
            message: "Hi, I would like to know more about your refund policy."
        }
    ];
    

    return(
        <div className="w-full mx-auto flex flex-col justify-center items-center gap-10">

        <div className="text-5xl text-white font-bold flex flex-row gap-3">
            <motion.div initial={{x:-100}} whileInView={{x:0}}  >
            All 
            </motion.div>

            <motion.div initial={{x:100}} whileInView={{x:0}} >
                Forms
            </motion.div>
        </div>

           

            <div className="flex flex-col gap-5">
              {
                data.map((d)=>(
                    <Card name={d.name} email={d.email} message={d.message}></Card>
                ))
              }
            </div>

            
            



        </div>
    )
}