import {  motion } from "framer-motion"

function HeroText() {
    return(
    <>
    <motion.div 
    className=" mt-8 mb-10 flex flex-col items-center w-80 md:w-150 lg:pl-10 text-center"
    animate={{opacity:1 , scale:1 , x:0}}
    initial={{opacity:0,scale:0.7 , x:-200}}
    transition={{duration:1}}
    >
        <h2 className=" dark:text-neutral-400 text-neutral-700 lg:text-4xl text-xl mb-2">My Name Is</h2>
        
        <h1 className=" dark:bg-bg  bg-white text-3xl lg:text-6xl font-semibold relative  mb-8 ">
            <span className="alatsi relative block text-white z-10 mix-blend-difference leading-10 lg:leading-20">AMIRHOSSEIN <br /> FOOLADCHANG</span>
            <div className=" block dark:bg-white bg-black size-15 lg:size-30 lg:-top-7  top-0 -right-3 rounded-[50%] z-0  absolute"></div>
            <div className=" block dark:bg-white bg-black size-15 lg:size-30 lg:top-16 -left-5 bottom-0 rounded-[50%] z-0  absolute"></div>
            </h1>
            
        
        
        <h2 className=" dark:text-neutral-500 text-neutral-900 lg:text-3xl   text-2xl">I bulid modern, responsive, and user-friendly web experiences</h2>
        <motion.a initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:1}} href="https://t.me/amirhossein1058" className=" text-2xl bg-black py-2 px-10 text-white cursor-pointer mt-5 rounded-2xl hover:bg-neutral-950 transition">HIRE ME!</motion.a>

    </motion.div>
    </>
    )
}

export default HeroText