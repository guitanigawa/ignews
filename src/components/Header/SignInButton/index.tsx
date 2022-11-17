import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from "./styles.module.scss"

export default function SignInButton(){
    const isUserLogged = true
    
    return(
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color={isUserLogged ? "#04d361" : "#eba417"}/>
            Sign in with Github

            <FiX 
                color="#737380"
                className={styles.closeIcon}
                display={isUserLogged ? "inline-block" : "none"}
            />
        </button>

    )
}