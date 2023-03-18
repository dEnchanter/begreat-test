import '@/styles/globals.css'
import '@/styles/themes.css'
import 'react-dropdown/style.css';
import 'animate.css';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
    // defaultTheme={theme}
   // attribute="class"
    // enableSystem={false}
    // storageKey="theme"
  >
    <div className="">
   
    
      {/* Add your app components here */}
      <Component {...pageProps} />
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      </div>
    </ThemeProvider>
  );
   
}
