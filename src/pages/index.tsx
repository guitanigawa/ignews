import { GetServerSideProps  } from "next"
import Head from "next/head"
import styles from "./home.module.scss"

import Image from "next/image"
import avatarSvg from "../../public/images/avatar.svg"
import SubscribeButton from "../components/SubscribeButton"
import { stripe } from "../services/stripe"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span className={styles.welcome}>👏 Hey, welcome!</span>
          
          <h1>News about the <span>React</span> world</h1>
          
          <p>
            Get access to all the publication<br/>
            <span>for %9.90 month</span>
          </p>

          <SubscribeButton/>
        </section>
 
        <Image src={avatarSvg} alt="girl coding"/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>{
  const price = await stripe.prices.retrieve("price_1M5B7SACACovCa0rWwnrZ48V", {
    expand: ["product"]
  })
  
  return {
    props: {

    }
  }
}