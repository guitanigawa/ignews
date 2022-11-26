import { GetStaticProps  } from "next"
import Head from "next/head"
import styles from "./home.module.scss"

import Image from "next/image"
import avatarSvg from "../../public/images/avatar.svg"
import SubscribeButton from "../components/SubscribeButton"
import { stripe } from "../services/stripe"

interface HomeProps{
  product: {
    priceId: string,
    amount: number
  }
}


export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>
 
        <Image src={avatarSvg} alt="girl coding"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const price = await stripe.prices.retrieve("price_1M5B7SACACovCa0rWwnrZ48V", {
    expand: ["product"]
  })
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount! / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}