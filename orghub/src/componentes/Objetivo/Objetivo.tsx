import styles from "./Objetivo.module.css"

const Objetivo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Identificação Proativa de Vulnerabilidades</h1>
                <p>Realizar testes regulares e abrangentes para identificar vulnerabilidades em sistemas, redes e aplicativos, garantindo uma abordagem proativa para fortalecer a segurança cibernética.</p>
            </div>
            <div className={styles.card}>
                <h1>Correção de Falhas de Segurança</h1>
                <p> Desenvolver soluções eficazes para corrigir as vulnerabilidades identificadas, implementando medidas preventivas e garantindo a integridade dos sistemas.</p>
            </div >
            <div className={styles.card}>
                <h1>Melhoria Contínua da Postura de Segurança</h1>
                <p>Trabalhar em colaboração com os clientes para implementar medidas de segurança contínuas e melhorar constantemente a postura de segurança cibernética, mantendo-se atualizado sobre as últimas ameaças e tecnologias.</p>
            </div>
            <div className={styles.card}>
                <h1>Transparência e Comunicação Efetiva</h1>
                <p>Priorizar a transparência na comunicação com os clientes, fornecendo relatórios detalhados sobre as descobertas, ações tomadas e recomendações para fortalecer a segurança de suas operações.</p>
            </div>
            
        </div>
    );
}

export default Objetivo;