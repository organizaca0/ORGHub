import styles from "./Home.module.css"
import logoHacking from "../../images/ethical-hacker-3378157-2810788.png"
const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.box1}>
            <h6>"Somos uma equipe de profissionais dedicados à segurança cibernética, 
                especializados em serviços de ethical hacking. Com uma abordagem proativa, 
                nosso objetivo é identificar e corrigir vulnerabilidades em sistemas de informação, 
                redes e aplicativos, garantindo a proteção e integridade dos dados de nossos clientes.<br/>
                 Nossos ethical hackers possuem experiência e conhecimento profundo em técnicas
                  avançadas de teste de segurança, garantindo uma abordagem abrangente para fortalecer
                   a resiliência contra ameaças cibernéticas. Priorizamos a transparência,
                    ética e confidencialidade, proporcionando soluções personalizadas para
                     fortalecer a postura de segurança de organizações em um mundo digital
                      em constante evolução."</h6>
        </div>
        <div className={styles.box2}>
            <img src={logoHacking} alt="" />
        </div>
    </div>);
}

export default Home;