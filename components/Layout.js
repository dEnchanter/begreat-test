import Navbar from "./Navbar";



const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> <div className="herobg"> {children} </div>
    </>
  );
};

export default Layout;
