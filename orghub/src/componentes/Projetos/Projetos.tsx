import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <div  className={styles.container}>
            <div className={styles.title}>
                <h2> Projetos</h2>
            </div>
            <div className={styles.container_projetos}>
                <div className={styles.projetos}>
                    <h2>Projeto 1</h2>
                    <img src={""} className={styles.userProjetos} alt="" />
                </div>
                <div className={styles.projetos}>
                    <h2>Projeto 2</h2>
                    <img src={""} className={styles.userProjetos} alt="" />
                </div>
                <div className={styles.projetos}>
                    <h2>Projeto 3</h2>
                    <img src={""} className={styles.userProjetos} alt="" />
                </div>
            </div>
        </div>
        
    );
}

export default Projetos;