import Lottie from "lottie-react"
import Animation from '../assets/Animation - 1738744600140.json'

function HeroGif(){
    return(
        <>
            <div>
            <Lottie animationData={Animation} loop={false} className="lg:size-125 -translate-y-10 size-60 md:size-80"/>
            </div>
        </>
    )
}

export default HeroGif