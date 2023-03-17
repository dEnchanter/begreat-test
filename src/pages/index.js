import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title> Be-great Finance</title>
      </Head>
      
      <h1 className='mt-20'> Hello World</h1>
    </div>
  )
}

