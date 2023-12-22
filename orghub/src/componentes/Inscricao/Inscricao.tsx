import styles from "./Inscricao.module.css"
import {FC, useState, ChangeEvent } from "react"

const Inscricao: FC = () => {
    interface IMember {
        username: string
        email: string
    }
    const [username, setUserName ] = useState <string>("");
    const [email, setEmail] = useState <string>("");
    const [members, setMembers] = useState<IMember[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
        if(event.target.value === "username"){
            setUserName(event.target.value)
        }else {
            setEmail(event.target.value)
        }
    }

    const addMember = (): void => {
        const newMember = {username: username, email: email}
        setMembers([...members, newMember])
        console.log(members)
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Inscreva-se</h2>
                <input type="text" placeholder="Nome" name='username' onChange={handleChange}/><br/>
                <input type="text" placeholder="E-mail" name="email" onChange={handleChange}/><br />
                <button onClick={addMember}>Inscreva-se</button>
            </div>
            
        </div>
        
        </>
    );
}

export default Inscricao;