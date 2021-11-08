import stylesmenu from './menu.module.scss'
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={menuOpen ? [stylesmenu.menu, stylesmenu.active].join(" ") : stylesmenu.menu}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}
