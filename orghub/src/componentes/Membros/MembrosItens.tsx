import styles from "./Membros.module.css";
import linkedinImg from "./linkedin-83.png";
import githubImg from "./github-logo.png";


interface CarouselItemProps {
    name: string;
    imageSrc: string;
    linkedin: string;
    github: string;
};

const MembrosItens: React.FC<CarouselItemProps> = ({ name, imageSrc, linkedin, github }) => {
    return (
    <div className={styles.card}>
        <div className={styles.carouselItem}>
            <div>
                <img className={styles.devImage} src={imageSrc} alt={name} />
            </div>
            <div>
                <h1 className={styles.nameDev} >{name}</h1>
                <div className={styles.carouselCaption}>
                    <a href={linkedin} target="_blank">
                        <img className={styles.carouselLinkedinImg} src={linkedinImg} alt={name}></img>
                    </a>
                    <a  href={github} target="_blank">
                        <img className={styles.carouselGithubImg} src={githubImg} alt={name}></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MembrosItens;