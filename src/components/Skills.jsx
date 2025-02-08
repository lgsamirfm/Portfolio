import HtmlImage from '../assets/html.png'
import CssImage from '../assets/Css.png'
import JavaImage from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import TailwindImage from '../assets/tailwindcss.png'
import FramerImage from '../assets/framer.png'
import FigmaImage from '../assets/figma.png'
import BootstrapImage from '../assets/bootstrap.png'


import './SkillsStyle.css'


function Skills() {
    const skills = [
        {
            name: 'HTML',
            image: HtmlImage
        },
        {
            name: 'CSS',
            image: CssImage
        },
        {
            name: 'JAVASCRIPT',
            image: JavaImage
        },
        {
            name: 'REACT',
            image: ReactImage
        },
        {
            name: 'TAILWIND',
            image: TailwindImage
        },
        {
            name: 'FRAMER',
            image: FramerImage
        },
        {
            name: 'FIGMA',
            image: FigmaImage
        },
        {
            name: 'BOOTSTRAP',
            image : BootstrapImage
        }
    ]
    return(
        <>
            <div className="skills">
            <div className=" blur-container">
                <p className=' text-2xl text-white pb-5'>My Skills:</p>
                <div className="moving-skills text-white">
                    {skills.map((skill , i) => (
                        <p className={`moving-skill dark:text-white text-black move-item${i + 1}`} key={i}><img src={skill.image} alt="" /> {skill.name} </p>
                    ))}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills