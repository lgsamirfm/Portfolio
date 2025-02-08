import videoSrc from '../assets/video.mp4'
import { useEffect, useRef, useState } from 'react'
import { motion , useInView,useScroll , useTransform } from 'framer-motion'
import PropTypes from 'prop-types'


function Video() {
    const videoRef = useRef(null)
    const isInView = useInView(videoRef, { once: false, margin: "-100px" }); 
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0,1] , ["1" , "1.2"])

    if (videoRef.current) {
        if (isInView) {
          videoRef.current.play(); 
        } else {
          videoRef.current.pause(); 
        }
      }

    return(
        <>
            <div className=' mt-30  px-10 min-h-[300vh]'>
                <div className='flex flex-col items-center sticky lg:top-15/100 top-2/10'>
                    <motion.h2 
                    className=' lg:text-2xl dark:text-white text-xl'
                    initial={{opacity:0,y:80}}
                    whileInView={{opacity:1 , y:0,transition:{duration:1}}}
                    viewport={{once:true}}
                    >My codes are clean and readable.</motion.h2>
                    <motion.video 
                    ref={videoRef} 
                    className=" rounded-2xl shadow-2xl lg:max-w-200  mt-5" 
                    src={videoSrc} 
                    muted 
                    playsInline 
                    loop
                    style={scale}
                    initial={{opacity:0,y:80}}
                    whileInView={{opacity:1 , y:0,transition:{duration:1}}}
                    
                    viewport={{once:true}}
                    ></motion.video>
                    <div className=' mt-5 flex md:flex-row flex-col gap-4'>
                    <DropDown title="Why" content="I am passionate about creating seamless, engaging, and high-performance web experiences that enhance user interactions and drive business impact." />
                    <DropDown title="How" content = "I leverage modern front-end technologies, intuitive UI/UX principles, and performance optimization strategies to build scalable, accessible, and visually appealing applications." />
                    </div>
                </div>
                
            </div>
        </>
    )
}


const DropDown = (props) => {
    const contentRef = useRef(null)
    const [isOpen , setIsOpen] = useState(false)
    const [contentHeight , setContentHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    },[isOpen])

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <div>
            <motion.div
            
            className="rounded-3xl bg-white border w-60 md:w-90 py-5 px-6 overflow-hidden"
            animate={{ height: isOpen ? contentHeight + 80 : 64}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={{opacity:0,y:80}}
            whileInView={{opacity:1 , y:0,transition:{duration:1,delay:1}}}
            viewport={{once:true}}
            
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold mix-blend-difference text-white  text-lg md:text-xl">{props.title}</h1>
              <button
                className={`cursor-pointer w-10 text-xl transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
                onClick={()=> handleClick()}
              >
                ^
              </button>
            </div>
            <motion.div
              
              
            >
              <p ref={contentRef} className=" mix-blend-difference text-sm  text-white mt-3">{props.content}</p>
            </motion.div>
          </motion.div>
            </div>
        </>
    )
}

DropDown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

export default Video