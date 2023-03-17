import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function Service() {
  return (
    <Layout className='min-h-screen flex items-center justify-center'>
      <Link href={'/#know'}>Click</Link>
      <main>
        <div id='#home' className='border border-sky-500 h-[50vh] flex items-center justify-center'>Home</div>
        <div className='h-[50vh] flex items-center justify-center'>Service</div>
        <div className='h-[50vh] flex items-center justify-center'>About</div>
        <div id="targetDiv" className='h-[50vh] flex items-center justify-center'>Chahah</div>
        <div id='#know' className='h-[50vh] flex items-center justify-center'>Know</div>
        <div id="targetDiv">This is the target div on Page 2</div>

      </main>
    </Layout>
  )
}
