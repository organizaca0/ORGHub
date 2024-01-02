import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <div  className={styles.container}>
            <div className={styles.projetos}>
                <h2>Projetos</h2>
                <img src={""} className={styles.userProjetos} alt="" />
            </div>
        </div>
        
    );
}

export default Projetos;