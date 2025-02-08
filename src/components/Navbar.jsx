import { useState } from "react"
import { motion } from "framer-motion"
import { useRef } from "react"
import PropTypes from "prop-types"


function Navbar({ scrollToSection, refs }) {
    const links = [{
        text: "HOME",
        id: "#"
    },
    {
        text: "ABOUT",
        id: '#about'
    },
    {
        text:"CODE",
        id:'#code'
    },
    {
        text:"PROJECTS",
        id:'#projects'
    }
    
        
    ]
    const [position , setposition] = useState({
        left: 0,
        width:0,
        opacity:0
    })
    const ref = [useRef(),useRef(),useRef(),useRef()]
    
    return(
        <>
            <nav className=" lg:pt-5 sticky z-20  top-0   p-2 w-full flex md:justify-center items-center justify-evenly">
                
            
            <div className=" ml-2  bg-white  flex p-1 border-2 rounded-full border-black relative  w-fit">
                {links.map((link,i) =>
                    <button
                    ref={ref[i]}
                    onMouseOver={() => {
                        const {width} = ref[i].current.getBoundingClientRect()
                        
                        setposition({
                            width,
                            opacity:1,
                            left: ref[i].current.offsetLeft,
                        })
                    }}
                    onMouseLeave={() => {
                        setposition((prev) => ({
                            ...prev,
                            opacity:0
                        }))
                    }}
                    
                    className=" relative z-10 block cursor-pointer px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base mix-blend-difference text-white" 
                    href={links[i].id} 
                    onClick={() => scrollToSection(refs[i])}
                    
                    key={i}

                    >{links[i].text}</button>
                )} 
                <Cursor position={position} />
                
            </div>
            </nav>
        </>
    )
}

function Cursor({position}) {
    return(
        <>
            <motion.li
             className=" block absolute z-0 h-7 md:h-12  bg-black rounded-full"
             animate={position}
             ></motion.li>
            
        </>
    )
}

Cursor.propTypes = {
    position: PropTypes.object,
}
Navbar.propTypes = {
    refs: PropTypes.array,
    scrollToSection: PropTypes.func,
}

export default Navbar