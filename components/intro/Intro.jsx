import stylesintro from './intro.module.scss'
import Image from 'next/image'
import JG_white from '../../assets/JG_white.svg'
import JEG from '../../assets/JEG.jpeg'
export default function Intro() {

    return (
        <div className={stylesintro.intro} id="intro">
            <div className={stylesintro.leftI}>
                <div className = {stylesintro.intro_logo_container}>
                    <Image src={JG_white} alt="JG logo" height={100} width={100}/>
                </div>
                <div className={stylesintro.intro_text_container}>
                    <h1 className={stylesintro.intro_statement_one}>Hey! I'm Joseph Goolic</h1>
                    <h1 className={stylesintro.intro_statement_two}>Frontend Developer</h1>
                    <h3 className={stylesintro.intro_statement_three}>I am looking for a remote position working with React/Next.js to 
                        Develop Elegant, Responsive and Interactive Websites</h3>
                </div>
            </div>
            <div className={stylesintro.rightI}>
                <div className={stylesintro.intro_image_container}>
                    <Image src={JEG} alt="A photo of yours truly"/>
                </div>
            </div>

        </div>
    )
}
