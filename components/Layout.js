import Head from "next/head";
import Navbar from "./Navbar";



const Layout = ({ children,title='' }) => {
  return (
    <>
    <Head>
        <title> {`Be Great Finance | ${title}`} </title>
        {/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
      </Head>
      <Navbar /> <div className="herobg"> {children} </div>
    </>
  );
};

export default Layout;
