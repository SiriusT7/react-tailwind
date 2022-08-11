import React from 'react';
import webpackIcon from "./assets/webpack.svg";
import reactIcon from "./assets/react.svg";
import tailwindIcon from "./assets/tailwindcss.svg";

export default function App() {
    return(
        <>
            <div className="h-screen flex justify-center items-center flex-col">
                <div className='font-poppins font-bold transition-all absolute top-32 text-4xl'>MADE WITH</div>
                <div className='flex justify-center gap-10'>
                    <img src={webpackIcon} alt="icon" className='w-1/4 hover:w-1/3 cursor-pointer transition-all'/>
                    <img src={reactIcon} alt="icon" className='w-1/4 hover:w-1/3 cursor-pointer transition-all'/>
                    <img src={tailwindIcon} alt="icon" className='w-1/4 hover:w-1/3 cursor-pointer transition-all'/>
                </div>
            </div>
        </>
    );
}