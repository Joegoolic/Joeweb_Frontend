import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Menu from "../components/menu/Menu";
import stylesapp from "./app.module.scss";
import useSWR from 'swr';
import { useState } from "react";

function Home(projects) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [animationOn, setAnimationOn] = useState(false)
    //const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    //console.log(vh, vw)
    return (
        <div>
            <div>
                <meta charSet="utf-8" />
                <link rel="icon" href="/JG.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <title>Joseph Goolic</title>
            </div>
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
    const res = await fetch('http://127.0.0.1:8000/api/Projects/');
    const projects = await res.json();
    return {
        props: {
            projects
        }
    };
}

export default Home