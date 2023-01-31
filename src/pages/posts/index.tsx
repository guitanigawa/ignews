import Head from "next/head"
import styles from "./styles.module.scss"

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts - ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>
                            2 de março de 2021
                        </time>
                        <strong>
                            How Stripe Designs Beautiful Websites
                        </strong>
                        <p>
                            xamining the tips and tricks used to make Stripe's website design a notch above the rest.
                        </p>
                    </a>
                    <a>
                        <time>
                            2 de março de 2021
                        </time>
                        <strong>
                            How Stripe Designs Beautiful Websites
                        </strong>
                        <p>
                            xamining the tips and tricks used to make Stripe's website design a notch above the rest.
                        </p>
                    </a>
                    <a>
                        <time>
                            2 de março de 2021
                        </time>
                        <strong>
                            How Stripe Designs Beautiful Websites
                        </strong>
                        <p>
                            xamining the tips and tricks used to make Stripe's website design a notch above the rest.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}