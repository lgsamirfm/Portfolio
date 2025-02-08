
import HeroGif from "./HeroGif"
import HeroText from "./HeroText"
import Skills from "./Skills"


function Hero() {
    return(
        <>
        <div className=" min-h-[80vh] bg-white dark:bg-bg">
            <div className="logo hidden md:block text-white mix-blend-difference md:absolute top-7 left-2 lg:left-10 w-fit font-bold   text-md md:text-2xl lg:text-3xl ">
                LGS/AMIRFM
            </div>
        
        <div className=" flex flex-col h-140 md:h-130 items-center md:flex-row md:justify-between md:pl-5 md:mt-20 md:items-start md:pr-20">
            <HeroText />
            <HeroGif />
        </div>
        <Skills />
        </div>
        
        
        
        </>
    )
}

export default Hero