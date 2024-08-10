import { Providers } from "../../providers";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <Header />
        {children}
      </Providers>
    </>
  );
};

export default Layout;
