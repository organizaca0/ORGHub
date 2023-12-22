import logo from "../../images/Octopus.jpg"
import styles from "./Navbar.module.css"

const Navbar = () => {

    return (
        <div className={styles.Nav}>
            <img src={logo} className={styles.logoPage} alt="HydraOctopus_logo" />
            <h1 className={styles.Titulo}>CyberOctopusSecurity</h1>
            <ul className={styles.container_components}>
                <li className={styles.components}><a className={styles.link} href="#">Home</a></li>
                <li className={styles.components}><a className={styles.link} href="#">Objetivo</a></li>
                <li className={styles.components}><a className={styles.link} href="#">Projetos</a></li>
                <li className={styles.components}><a className={styles.link} href="#">Membros</a></li>
                <li className={styles.components}><a className={styles.link} href="#">Contatos</a></li>
            </ul>
        </div>
    );
}

export default Navbar;