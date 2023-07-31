import Head from "next/head";
import Navbar from "./Navbar";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";



const Layout = ({ children,title='' }) => {
  return (
    <>
    <Head>
        <title> {`Be Great Finance | ${title}`} </title>
        {/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
        <GoogleAnalytics measurementId='G-DQXFFNZWXG' />
        
      </Head>
      <Navbar /> <div className="herobg"> {children} </div>
    </>
  );
};

export default Layout;
