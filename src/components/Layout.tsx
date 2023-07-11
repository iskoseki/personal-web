import React from "react";
import Footer from "./Footer";
const Navigation = React.lazy(() => import("./Navigation"));

type MyComponentProps = React.PropsWithChildren<object>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <Navigation />
      <React.Suspense>
        <main>{children}</main>
      </React.Suspense>

      <Footer />
    </>
  );
};
export default Layout;
