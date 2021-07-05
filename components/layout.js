import React from "react";
import Footer from "./footer";
import NewFooter from "./newFooter";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <NewFooter />
    </>
  );
}
