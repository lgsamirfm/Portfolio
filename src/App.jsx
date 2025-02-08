import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Video from "./components/Video"
import Projects from "./components/Projects"
import { useRef } from "react"
import Footer from "./components/Footer"


function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
    <div ref={section1Ref} className=" dark:bg-bg bg-white">
      <Navbar scrollToSection={scrollToSection} refs={[section1Ref,section2Ref,section3Ref,section4Ref]} />
      <section ><Hero  /></section>
      <section ref={section2Ref}><About  /></section>
      <section ref={section3Ref}><Video  /></section>
      
      <section ref={section4Ref}><Projects /></section>
      <Footer></Footer>
    </div>
      
      
    </>
  )
}

export default App
