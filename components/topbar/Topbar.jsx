import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Hover from "./hover";
import stylestopbar from "./topbar.module.scss";


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={menuOpen ? [stylestopbar.topbar, stylestopbar.active].join(" ") : stylestopbar.topbar}>
            <div className={stylestopbar.wrapper}>
                <div className={stylestopbar.left}>
                    <a href="#intro" className={stylestopbar.logo}>Joseph Goolic</a>
                    <div className={stylestopbar.itemContainer}>
                        <Person className={stylestopbar.icon} />
                        <span>+347 410 2593</span>
                    </div>
                    <a href="#contact">
                        <div className={stylestopbar.itemContainer}>
                            <Mail className={stylestopbar.icon} />
                            <span><Hover /></span>
                        </div>
                    </a>
                    <div className={stylestopbar.itemContainer}>
                        <a href="https://www.linkedin.com/in/jeg1595/">
                            <LinkedInIcon className={stylestopbar.icon} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className={stylestopbar.itemContainer}>
                        <a href="https://github.com/Joegoolic">
                            <GitHubIcon className={stylestopbar.icon} />
                            <span>GitHub</span>
                        </a>
                    </div>

                </div>
                <div className={stylestopbar.right}>
                    <div className={stylestopbar.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={stylestopbar.line1}></span>
                        <span className={stylestopbar.line2}></span>
                        <span className={stylestopbar.line3}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

