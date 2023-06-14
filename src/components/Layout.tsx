import Footer from "./Footer";
import Navigation from "./Navigation";

type MyComponentProps = React.PropsWithChildren<object>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
