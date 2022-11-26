import { signIn, useSession } from "next-auth/react"
import styles from "./styles.module.scss"

interface SubscribeButtonProps{
    priceId: string
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps){
    const {data: session} = useSession()
    
    
    const handleSubscribe = () => {
        if(!session){
            signIn("github")
            return
        }

        fetch("http://localhost:3000/api/subscribe", {method: "POST"})    
    }
    
    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    )
}