// import React from 'react';

import { useState } from "react";

const PopUp = () => {
    const [images, setImages] = useState({
        img1 : "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2 : "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3 : "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img4 : "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);
    return (
        <div>
             <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center mx-20 mt-40'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-[500px] aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Interior Design</span>
                    <h1 className='text-3xl font-bold'>Interior Design</h1>
                </div>
                <p className='text-gray-700'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aut, placeat repellat illo tempore animi aliquam praesentium. Natus atque in, minima ut nesciunt omnis modi nisi, nihil repudiandae rem magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit magni obcaecati voluptate facere iure perspiciatis enim, harum optio! Delectus.
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Get Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PopUp;