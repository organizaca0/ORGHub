import styles from "./Membros.module.css"
import MembrosCarousel from "./MembrosCarousel";
import imgLinkedin from "./linkedin-83.png"


const MembrosArray = () => {
    const carouselItems = [
        {
            name: "Vitor Pimentel",
            imageSrc: "https://avatars.githubusercontent.com/u/37230076?v=4",
            linkedin: "https://www.linkedin.com/in/vitor-pimentel/",
            github: "https://github.com/VitorPPimentel",
        },
        {
            name: "Nicolas Lacerda",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "João",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "Felipe",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "Allyson",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "Will",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "Suzana",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
        {
            name: "Jonathan Fernandes",
            imageSrc: imgLinkedin,
            linkedin: "string",
            github: "string",
        },
      ];

      return (
        <div>
            <h1 className={styles.title}>Membros</h1>
            <MembrosCarousel itens={carouselItems} />
        </div>
      );
}

export default MembrosArray;