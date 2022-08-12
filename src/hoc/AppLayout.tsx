import React, { Fragment, ReactNode } from "react";

// globals
import { Navbar, Footer } from "../components/globals";

type Props = {
  children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default AppLayout;
