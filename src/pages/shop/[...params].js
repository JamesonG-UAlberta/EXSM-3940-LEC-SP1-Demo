import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
  return (
    !router.query.params?
    <p>Loading...</p>
    :
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
            // This is an example. These components are not built.
            router.query.params.length > 2 ?
                <ProductDetail id={router.query.params[2]} /> :
            router.query.params.length > 1 ? 
                <CategorySummary categoryName={router.query.params[1]} /> : 
                <ProductSummary />
        }
    </>
  )
}
