import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Faqs from '../../components/modules/Faqs';
import Footer from '../../components/modules/Footer';
import Hero from '../../components/modules/Hero';
import HowItWorks from '../../components/modules/HowItWorks';
import Pricing from '../../components/modules/Pricing';
import Tools from '../../components/modules/Tools';
import GoogleAnalytics from "@bradgarropy/next-google-analytics";



export default function Home() {
  const router =useRouter();
  return (
    <Layout>
      <Head>
        <title> Be Great Finance</title>
        <link rel="icon" href="/Bicon.png" />

        <GoogleAnalytics measurementId='G-DQXFFNZWXG' />
      </Head>
      
      <main>
        <Hero/>
        <HowItWorks/>
        <Tools/>
        <Pricing/>
        <Faqs/>
        <Footer/>

        
      

      </main>
    </Layout>
  )
}

