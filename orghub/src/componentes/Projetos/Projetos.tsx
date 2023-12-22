import projeto from "../../images/security.jpeg"
import styles from "./Projetos.module.css"

const Projetos = (props: { id: string | undefined; }) => {
    return (
        <div id={props.id} className={styles.container}>
            <div className={styles.projetos}>
                <h2>Projetos</h2>
                <img src={projeto} className={styles.userProjetos} alt="" />
            </div>
        </div>
        
    );
}

export default Projetos;