import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <div  className={styles.container}>
            <div className={styles.component}>
                <div>
                    <img src="https://abii.com.br/wp-content/uploads/2023/10/ciberseguranca-3.jpg" alt="" />
                </div>
                <div>
                    <div className="retangulo"></div>
                    <h1>Projetos</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, eius, praesentium repellat ipsam odio laudantium nemo cum, quisquam quidem autem numquam cumque blanditiis sequi voluptates nisi perspiciatis. Vel, praesentium libero.</p>
                </div>
                <div>
                    <h3>Bla bla bla</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore ipsam optio aut fuga sit dolorem quidem, ea dicta veniam. Doloribus fugiat eum fugit asperiores laborum, expedita rerum veritatis praesentium!</p>
                </div>
                <div>
                    <img src="https://www.rnp.br/arquivos/2019-11/desafios%20TI.jpeg?VersionId=P4nVhQHnYIjK8o.oeWbsoLYAH4FOnpZk" alt="" />
                </div>
                
            </div>  
        </div>
        
    );
}

export default Projetos;