import { useTheme } from 'next-themes';
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout';

export default function Service() {
  const { theme, setTheme } = useTheme();
    return (
    <div className=''>
      <Link href={'/#know'}>Click</Link>
      <main>
     
      <div class="table-responsive">
  <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
            </div>
      </main>
    </div>
  )
}
