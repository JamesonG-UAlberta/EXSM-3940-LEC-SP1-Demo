import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
  return (
    !router.query.number?
    <p>Loading...</p>
    :
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to the {router.query.number[0]} Page!</p>
          {router.query.number.length>1?<p>Hello, {router.query.number[1]}!</p>:null}
          <ul>
            {router.query.number.map((number) => <li>{number}</li>)}
          </ul>
        </div>
      </main>
    </>
  )
}
