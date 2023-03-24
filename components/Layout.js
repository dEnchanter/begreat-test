import Head from "next/head";
import Navbar from "./Navbar";



const Layout = ({ children,title='' }) => {
  return (
    <>
    <Head>
        <title> {`Be-great Finance | ${title}`} </title>
      </Head>
      <Navbar /> <div className="herobg"> {children} </div>
    </>
  );
};

export default Layout;
