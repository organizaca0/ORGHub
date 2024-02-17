import styles from "./Membros.module.css"

const Membros = () => {
    return(
    <div className={styles.container}>
        <div className={styles.title}>
            <h2> Equipe</h2>
        </div>
        <div className={styles.users_container}>
                <div className={styles.users}>
                    <div className={styles.profile_pic}>
                        <img height={150} src='https://orghub.s3.amazonaws.com/profile_pics/nicolas_profile.jpeg' />
                    </div>
                    <h2>Nicolas Lacerda</h2>
                    <h3>Desenvolvedor Fullstack</h3>
                    <p>Toque da bike e do backend</p>
                    <a href="https://www.linkedin.com/in/nicolas-rocha-lacerda-b550491b8/" target="_blank">Linkedin</a>
                </div>
                <div className={styles.users}>
                    <div className={styles.card_content}>
                    <img/>
                    <h2>NOME</h2>
                    <h3>cargo</h3>
                    <p>Descrição</p>
                    <a href="">Links</a>
                    </div>
                </div>
                <div className={styles.users}>
                    <div className={styles.profile_pic}>

                    </div>
                    <img/>
                    <h2>NOME</h2>
                    <h3>cargo</h3>
                    <p>Descrição</p>
                    <a href="">Links</a>
                </div>
                <div className={styles.users}>
                    <div className={styles.profile_pic}>

                    </div>
                    <img/>
                    <h2>NOME</h2>
                    <h3>cargo</h3>
                    <p>Descrição</p>
                    <a href="">Links</a>
                </div>
                <div className={styles.users}>
                    <img/>
                    <h2>NOME</h2>
                    <h3>cargo</h3>
                    <p>Descrição</p>
                    <a href="">Links</a>
                </div>
            </div>
    </div>
        
        
        
    );
}

export default Membros;