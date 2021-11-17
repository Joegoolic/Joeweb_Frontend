import { init } from 'ityped'
import { useEffect, useRef} from "react"
import styleSkills from "./skills.module.scss"
import Image from 'next/image'
//import Skills_svg from '../../assets/skills.svg'
import Head_svg from '../../assets/Head.svg'
import Gear_svg from '../../assets/Gear.svg'

export default function Skills({ animationOn, setAnimationOn }) {

    const Lstring = 'Python, Javascript, HTML, CSS, SASS'
    const Fstring = 'Django, React.js, Node.js, Express.js'
    const Dstring = 'Nginx, Apache'
    const DBstring = 'MongoDB, MySQL, PostgreSQL'
    const Cstring = 'AWS, E3S, AWS, LightSail, Heroku'

    const languages = useRef();
    useEffect(() => {
        init(languages.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            loop: true,
            strings: [Lstring],
        })
    }, [])

    const frameworks = useRef();
    useEffect(() => {
        init(frameworks.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            loop: true,
            strings: [Fstring],
        })
    }, [])
    const Deployment = useRef();
    useEffect(() => {
        init(Deployment.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            loop: true,
            strings: [Dstring]
        })
    }, [])
    const Database = useRef();
    useEffect(() => {
        init(Database.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            loop: true,
            strings: [DBstring]
        })
    }, [])
    const Cloud = useRef();
    useEffect(() => {
        init(Cloud.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            loop: true,
            strings: [Cstring],
        })
    }, [])
    return (
        <div className={styleSkills.skills} id="skills">
            <div className={styleSkills.skills_Container}>
                <div className={styleSkills.skills_filler}>

                </div>
                <div className={styleSkills.skills_list}>
                    <div className={styleSkills.skillsHeader}>
                        <h1>My Skill Tree</h1>
                    </div>
                    {/*Languages*/}
                    <div className={styleSkills.skills_position}>
                        <div className={animationOn ? [styleSkills.Animation_control_on, styleSkills.active].join(" ") : styleSkills.Animation_control_on}/*{"Animation_control_on " + (animationOn && "active")}*/>
                            <div className={styleSkills.skillsElement}>
                                <h2>Languages</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span ref={languages}></span>
                            </div>
                        </div>

                        <div className={animationOn ? [styleSkills.Animation_control_off, styleSkills.active].join(" ") : styleSkills.Animation_control_off}/*[{"Animation_control_off " + (animationOn && "active")}*/>
                            <div className={styleSkills.skillsElement}>
                                <h2>Languages</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span>{[Lstring]}</span>
                            </div>
                        </div>
                    </div>
                    {/*Frameworks*/}
                    <div className={styleSkills.skills_position}>
                        <div className={animationOn ? [styleSkills.Animation_control_on, styleSkills.active].join(" ") : styleSkills.Animation_control_on}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Frameworks</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span ref={frameworks}></span>
                            </div>
                        </div>

                        <div className={animationOn ? [styleSkills.Animation_control_off, styleSkills.active].join(" ") : styleSkills.Animation_control_off}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Frameworks</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span >{[Fstring]}</span>
                            </div>
                        </div>
                    </div>
                    {/*DataBase*/}
                    <div className={styleSkills.skills_position}>
                        <div className={animationOn ? [styleSkills.Animation_control_on, styleSkills.active].join(" ") : styleSkills.Animation_control_on}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Databases</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span ref={Database}></span>
                            </div>
                        </div>

                        <div className={animationOn ? [styleSkills.Animation_control_off, styleSkills.active].join(" ") : styleSkills.Animation_control_off}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Databases</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span>{[DBstring]}</span>
                            </div>
                        </div>
                    </div>
                    {/*Deployment*/}
                    <div className={styleSkills.skills_position}>
                        <div className={animationOn ? [styleSkills.Animation_control_on, styleSkills.active].join(" ") : styleSkills.Animation_control_on}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Deployment</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span ref={Deployment}></span>
                            </div>
                        </div>

                        <div className={animationOn ? [styleSkills.Animation_control_off, styleSkills.active].join(" ") : styleSkills.Animation_control_off}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Deployment</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span >{[Dstring]}</span>
                            </div>
                        </div>
                    </div>
                    {/*Cloud*/}
                    <div className={styleSkills.skills_position}>
                        <div className={animationOn ? [styleSkills.Animation_control_on, styleSkills.active].join(" ") : styleSkills.Animation_control_on}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Cloud Services</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span ref={Cloud}></span>
                            </div>
                        </div>

                        <div className={animationOn ? [styleSkills.Animation_control_off, styleSkills.active].join(" ") : styleSkills.Animation_control_off}>
                            <div className={styleSkills.skillsElement}>
                                <h2>Cloud Services</h2>
                            </div>
                            <div className={styleSkills.span_Center}>
                                <span>{[Cstring]}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styleSkills.ButtonPosition}>
                        <div className={animationOn ? [styleSkills.button_center_on, styleSkills.active].join(" ") : styleSkills.button_center_on}>
                            <button onClick={() => setAnimationOn(!animationOn)}>Stop Animation</button>
                        </div>
                        <div className={animationOn ? [styleSkills.button_center_off, styleSkills.active].join(" ") : styleSkills.button_center_off}>
                            <button onClick={() => setAnimationOn(!animationOn)}>Start Animation</button>
                        </div>
                    </div>
                </div>
                {/*
                <div className={styleSkills.skills_image_container}>
                    <Image src={Skills_svg} alt="Art work of a person with gear in the position of the brain" />
                </div>*/}
                <div className={styleSkills.skills_image_container}>
                     <div className={styleSkills.Head}>
                        <Image src={Head_svg} alt="Art work of a person with gear in the position of the brain" />
                    </div>
                    <div className={styleSkills.Gear}>
                        <Image className = {styleSkills.GearImage}src={Gear_svg} alt="Art work of a person with gear in the position of the brain" />
                    </div>
                </div>
            </div>
        </div>
    )
}
//export default Skills
/*{"button_center_off " + (animationOn && "active")}>
{"button_center_on " + (animationOn && "active")}*/