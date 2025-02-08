import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project6 from '../assets/project6.png'
import { motion } from 'framer-motion'


function Projects() {

    return(
        <>
            <div className=' mt-50 p-10'>
            <motion.h1 
                className="about lg:text-4xl text-white font-bold text-2xl  pb-10 mix-blend-difference "
                initial={{opacity:0,y:80}}
                whileInView={{opacity:1 , y:0,transition:{duration:1}}}
                viewport={{once:true}}
                >PROJECTS
                </motion.h1>
                <div className=' flex flex-wrap items-center justify-center gap-4'>
                    <motion.img 
                    className=' md:max-w-180 rounded-2xl hover:scale-101 transition' 
                    src={project1}
                    initial={{opacity:0}}
                    whileInView={{opacity:1 ,transition:{duration:1}}}
                    viewport={{once:true}}
                     />
                    <motion.img 
                    className=' md:max-w-180 rounded-2xl hover:scale-101 transition' 
                    src={project2}
                    initial={{opacity:0}}
                    whileInView={{opacity:1 ,transition:{duration:1}}}
                    viewport={{once:true}}
                     />
                    <motion.img 
                    className=' md:max-w-180 rounded-2xl hover:scale-101 transition' 
                    src={project6}
                    initial={{opacity:0}}
                    whileInView={{opacity:1 ,transition:{duration:1}}}
                    viewport={{once:true}}
                     />
                </div>
                
            </div>
        </>
    )
}

export default Projects