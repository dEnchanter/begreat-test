import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Faqs from '../../components/modules/Faqs';
import Footer from '../../components/modules/Footer';
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
        <link rel="icon" href="/Bicon.png" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
        <script>
          dangerouslySetInnerHTML={{ 
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
            `
          }}
        </script>
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

