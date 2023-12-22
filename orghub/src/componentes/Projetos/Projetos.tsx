import projeto from "../../images/security.jpeg"
import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <div  className={styles.container}>
            <div className={styles.projetos}>
                <h2>Projetos</h2>
                <img src={projeto} className={styles.userProjetos} alt="" />
            </div>
        </div>
        
    );
}

export default Projetos;