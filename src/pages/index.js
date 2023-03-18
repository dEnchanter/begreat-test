import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Faqs from '../../components/modules/Faqs';
import Hero from '../../components/modules/Hero';
import HowItWorks from '../../components/modules/HowItWorks';
import Pricing from '../../components/modules/Pricing';
import Tools from '../../components/modules/Tools';



export default function Home() {
  const router =useRouter();
  return (
    <Layout>
      <Head>
        <title> Be-great Finance</title>
      </Head>
      
      <main>
        <Hero/>
        <HowItWorks/>
        <Tools/>
        <Pricing/>
        <Faqs/>

        
      

      </main>
    </Layout>
  )
}

