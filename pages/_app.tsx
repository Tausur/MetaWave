import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState('dark')

  const getData = (data : any)=>{
    setMode(data)
  }

  return <div>
    <Navbar onSubmit={getData}/>
    <Component {...pageProps} theme={mode}/>
    <Footer/>
  </div>
}
