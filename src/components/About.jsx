import learnImage from '../assets/learn.jpg'
import teamImage from '../assets/team2.jpg'
import problemImage from '../assets/problem.jpg'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function About() {
    return(
        <>
            <div id='about' className=" bg-white dark:bg-bg min-h-screen py-10 px-5">
                <motion.h1 
                className="about lg:text-4xl text-white font-bold text-2xl border-b-2 pb-4 mix-blend-difference "
                initial={{opacity:0,y:80}}
                whileInView={{opacity:1 , y:0,transition:{duration:1}}}
                viewport={{once:true}}
                >ABOUT
                </motion.h1>
                <motion.p 
                className=" lg:text-3xl lg:mb-20 text-white mix-blend-difference md:text-xl text-lg lg:w-5/10 pt-5"
                initial={{opacity:0,y:80}}
                whileInView={{opacity:1 , y:0,transition:{duration:1}}}
                viewport={{once:true}}
                >I specialize in modern JavaScript frameworks like React, and I love turning complex designs into smooth, interactive experiences.</motion.p>
                <Cards />
            </div>
        </>
    )
}

const Cards = () => {
    const infos = [
        {
            title : "Team work",
            text : "I believe great products are built through teamwork. Whether brainstorming UI improvements, debugging code together, or helping a teammate understand a concept.",
            image: teamImage
        },
        {
            title : "Problem solving",
            text : "Problem-solving is at the core of my development process. From debugging JavaScript errors to optimizing React components for better performance.",
            image: problemImage
        },
        {
            title : "Learning skill",
            text :  "I’m a fast learner who enjoys keeping up with the latest front-end technologies and best practices. Whether it’s mastering a new JavaScript framework or improving performance techniques.",
            image: learnImage
        }
    ]

    return(
        <>
            <div className="  flex flex-wrap gap-8 justify-evenly  mt-10">
                {infos.map((info , i) => <Card 
                key={i} 
                title={infos[i].title} 
                text={infos[i].text} 
                image={infos[i].image} 
                />)}
            </div>

        </>
    )

}


const Card = (props) => {
    return(
        <>
            <motion.div 
            className=" p-4 w-80 lg:w-100 flex flex-col gap-2 bg-white dark:bg-bg shadow-lg border rounded-2xl border-gray-200"
            initial={{opacity:0,y:80}}
            whileInView={{opacity:1 , y:0,transition:{duration:1}}}
            viewport={{once:true}}
            whileHover={{scale:1.05}}
            >
                <img src={props.image} className=' object-cover lg:w-70  h-30 lg:h-50 w-50 rounded-lg' alt="" />
                <h3 className=" lg:text-2xl mix-blend-difference text-white text-xl font-bold font-sans">{props.title}</h3>
                <p className=" dark:text-gray-400 lg:text-lg text-sm text-gray-600 indent-2">{props.text}</p>
            </motion.div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
}

export default About