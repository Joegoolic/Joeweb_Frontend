import { init } from 'ityped'
import { useEffect, useRef } from "react"
import styleSkills from "./skills.module.scss"
import Image from 'next/image'
import Skills_svg from '../../assets/skillsw.svg'

export default function Skills({ animationOn, setAnimationOn }) {
    const languages = useRef();
    useEffect(() => {
        init(languages.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Python', 'Javascript', 'HTML', 'CSS', 'SASS']
        })
    }, [])

    const frameworks = useRef();
    useEffect(() => {
        init(frameworks.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Django', 'React.js', 'Node.js', 'Express.js']
        })
    }, [])
    const Deployment = useRef();
    useEffect(() => {
        init(Deployment.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Nginx', 'Apache']
        })
    }, [])
    const Database = useRef();
    useEffect(() => {
        init(Database.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['MongoDB', 'MySQL', 'PostgreSQL']
        })
    }, [])
    const Cloud = useRef();
    useEffect(() => {
        init(Cloud.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['AWS E3S', 'AWS LightSail', 'Heroku']
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
                                <span >Python,Javascript,HTML,CSS,SASS</span>
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
                                <span >Django,React.js,Node.js,Express.js</span>
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
                                <span >MongoDB,MySQL,PostgreSQL</span>
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
                                <span >Nginx,Apache</span>
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
                                <span>AWS E3S,AWS LightSail,Heroku</span>
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
                <div className={styleSkills.skills_image_container}>
                    <Image src={Skills_svg} alt="Art work of a person with gear in the position of the brain" />
                </div>
            </div>
        </div>
    )
}
//export default Skills
/*{"button_center_off " + (animationOn && "active")}>
{"button_center_on " + (animationOn && "active")}*/