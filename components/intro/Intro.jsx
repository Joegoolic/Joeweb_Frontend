import stylesintro from './intro.module.scss'
import Image from 'next/image'
import JG_white from '../../assets/JG_white.svg'
import JEG from '../../assets/JEG.jpeg'
import { useState,useEffect,useRef } from 'react';
import { motion,AnimatePresence } from "framer-motion"

export default function Intro() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
   
    useEffect(() => {
        setIsLoaded(true);
        }, []);
    
    useEffect(() => {
        if (isLoaded) {
            setTimeout(() => {
                setIsPageLoaded(true);
            }, 1000);
        }
        }, [isLoaded]);
    
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)
    
    const callbackFunction = (entries) => {
        const [entry ]= entries
        setIsVisible(entry.isIntersecting)
    }
    
    const options ={
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)
        return () => {
            if(containerRef.current)observer.unobserve(containerRef.current)
        }
        },[containerRef,options])
          

    return (
        <div className={stylesintro.intro} id="intro">
            <div ref={containerRef} className={stylesintro.leftI}>
            <AnimatePresence>
            {isVisible&& (<motion.div
                key="intro_text"
                initial={{ x: 300, opacity: 0,duration:1,animationDelay:0.5}}
                animate={{ x: 0, opacity: 1,duration:1,animationDelay:0.5 }}
                exit={{ x: 300, opacity: 0,duration:1,animationDelay:0.5 }}
               >
                <div className = {stylesintro.intro_logo_container} key="intro_text">
                    <Image src={JG_white} alt="JG logo" height={100} width={100}/>
                </div>
                <div className={stylesintro.intro_text_container}>
                    <h1 className={stylesintro.intro_statement_one}>Hey! I'm Joseph Goolic</h1>
                    <h2 className={stylesintro.intro_statement_two}>Frontend Developer</h2>
                    <h3 className={stylesintro.intro_statement_three}>I am looking for a remote position working with React/Next.js to 
                        Develop Elegant, Responsive and Interactive Websites</h3>
                </div>  
                </motion.div>)} 
                </AnimatePresence>
            </div>
            <AnimatePresence>
            {isVisible && (<motion.div
                key="intro_image"
                initial={{ x: 300, opacity: 0,duration:1,animationDelay:0.5 }}
                animate={{ x: 0, opacity: 1,duration:1,animationDelay:0.5 }}
                exit={{ x: 300, opacity: 0,duration:1,animationDelay:0.5 }}
               >
                <div className={stylesintro.rightI}>
                    <div className={stylesintro.intro_image_container} key="intro_image">
                        <Image src={JEG} alt="A photo of yours truly"/>
                    </div>
                </div>
            </motion.div>)} 
            </AnimatePresence>
        </div>
    )
}
