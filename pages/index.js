import Head from 'next/head';
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Menu from "../components/menu/Menu";
import stylesapp from "./app.module.scss";
import { useState } from "react";
import { API_URL } from "../config/index";

function Home(projects) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [animationOn, setAnimationOn] = useState(false)
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/JG.ico"/>
                <link rel="icon" type="ico" sizes="32x32" href="/JG.ico"/>
                <link rel="icon" type="ico" sizes="16x16" href="/JG.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                <title>Joseph Goolic</title>
            </Head>
            <div className={stylesapp.app}>
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className={stylesapp.sections}>
                    <Intro />
                    <Skills animationOn={animationOn} setAnimationOn={setAnimationOn} />
                    <Portfolio projects={projects} />
                    <Contact />
                </div>
            </div>
        </div>
               
       
    );
}
export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/Projects/`);
    const projects = await res.json();
    return {
        props: {
            projects
        }
    };
}

export default Home