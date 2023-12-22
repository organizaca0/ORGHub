import styles from "./Home.module.css"
import logo from "../../images/ethical-hacker-3378157-2810788.png"
const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.box1}>
            <h6>"Somos um grupo de programadores em crescimento e desejamos compartilhar nossas experiencias com o mundo."</h6>
        </div>
        <div className={styles.box2}>
            <img src={logo} alt="" />
        </div>
    </div>);
}

export default Home;