import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import axios from "axios";



export const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("example.com");
            console.log(response.data.data);
            setData(response.data.data);  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full mx-auto flex flex-col justify-center items-center gap-10">
            <div className="text-5xl text-white font-bold flex flex-row gap-3">
                <motion.div initial={{x: -100}} whileInView={{x: 0}} >
                    All
                </motion.div>
                <motion.div initial={{x: 100}} whileInView={{x: 0}} >
                    Forms
                </motion.div>
            </div>
            <div className="flex flex-col gap-5">
                {data.map((d, index) => (
                    <Card key={index} name={d.name} email={d.email} message={d.message}></Card>
                ))}
            </div>
        </div>
    );
}
