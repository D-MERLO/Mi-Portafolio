import style from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={`${style.navbar} flex space-x-10 text-sm text-white bg-black p-7 `}>
            <Link className={style.linkNav} href="#home">INICIO</Link>
            <Link className={style.linkNav} href="#aboutMe">SOBRE MI</Link>
            <Link className={style.linkNav} href="#projects">PROYECTOS</Link>
            <Link className={style.linkNav} href="#contact">CONTACTO</Link>
        </div>
    )
}
export default Navbar;