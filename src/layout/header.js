
import React, { Fragment } from "react";
import Header from "../components/header";

const LayoutOne = ({children}) => {
  return (
    <Fragment>
       <Header />
       {children}
    </Fragment>
  );
};

export default LayoutOne;