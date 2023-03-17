import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'



export default function Home() {
  const router =useRouter();
  return (
    <Layout>
      <Head>
        <title> Be-great Finance</title>
      </Head>
      
      <main>
        <div id='homeDiv' className='border border-sky-500 h-[50vh] flex items-center justify-center'>Home</div>
        <div className='h-[50vh] flex items-center justify-center'>Service</div>
        <div className='h-[50vh] flex items-center justify-center'>About</div>
        <div className='h-[50vh] flex items-center justify-center'>Chahah</div>
        <div id='#know' className='h-[50vh] flex items-center justify-center'>Know</div>
        <div id="targetDiv">This is the target div on Page 2</div>

      </main>
    </Layout>
  )
}