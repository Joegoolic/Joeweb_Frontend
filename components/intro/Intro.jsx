import stylesintro from './intro.module.scss'
import Image from 'next/image'
import Intro_svg from '../../assets/intro.svg'
export default function Intro() {

    return (
        <div className={stylesintro.intro} id="intro">
            <div className={stylesintro.leftI}>
                <div className={stylesintro.intro_text_container}>
                    <h1 className={stylesintro.intro_statement_one}>Hey I'm Joseph Goolic</h1>
                    <h1 className={stylesintro.intro_statement_two}>Fullstack Developer</h1>
                </div>
            </div>
            <div className={stylesintro.rightI}>
                <div className={stylesintro.intro_image_container}>
                    <Image src={Intro_svg} alt="Man looking at multiple application layouts" />
                </div>
            </div>

        </div>
    )
}
