import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Layout = ({ children, ...pageProps }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div >{children}</div>
        <Footer {...pageProps} />
      </div>
    </div>
  );
};

export default Layout;
