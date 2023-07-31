import '@/styles/globals.css'
import '@/styles/themes.css'
import 'react-dropdown/style.css';
import 'animate.css';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider
   defaultTheme={'dark'}
   // attribute="class"
    // enableSystem={false}
    // storageKey="theme"
  >
        <GoogleOAuthProvider clientId={'835111729100-862akcf0948la5pfj0892g8v55tbuva8.apps.googleusercontent.com'}>

    <Provider store={store}>
   
    <Toaster
  position='top-right'
  />
      <GoogleAnalytics measurementId='G-DQXFFNZWXG' />

      {/* Add your app components here */}
      <Component {...pageProps} />
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      </Provider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
   
}
