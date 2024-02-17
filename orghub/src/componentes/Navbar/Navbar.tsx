import { useEffect, useState } from "react";
import logo from "../../src/images/orgIcon.png"
import styles from "./Navbar.module.css"


const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isScrolled ? styles.NavScrolled : styles.Nav}>
            <img src={logo} className={styles.logoPage} alt="logo" />
            <h1 className={styles.Titulo}>ORGANIZAÇÃO</h1>
            <ul className={styles.container_components}>
                <li onClick={() => scrollToSection('Home')} className={styles.components}><a className={styles.link} >Home</a></li>
                <li onClick={() => scrollToSection('Objetivo')} className={styles.components}><a className={styles.link} >Objetivo</a></li>
                <li onClick={() => scrollToSection('Projetos')} className={styles.components}><a className={styles.link} >Projetos</a></li>
                <li onClick={() => scrollToSection('Membros')} className={styles.components}><a className={styles.link} >Membros</a></li>
                <li onClick={() => scrollToSection('Inscricao')} className={styles.components}><a className={styles.link} >Inscrição</a></li>
                <li onClick={() => scrollToSection('Contatos')} className={styles.components}><a className={styles.link} >Contatos</a></li>
            </ul>
        </div>
    );
}

export default Navbar;