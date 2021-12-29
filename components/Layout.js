import React from "react";

// Components
import SEO from "components/Seo";
import Header from "components/Header";
import Footer from "components/Footer";

// Styles
import * as Styled from "styles/layout.styled";

const Layout = ({ children, title, settings }) => {
  const { primary_color: primaryColor } = settings || {};

  return (
    <>
      <SEO title={title} color={primaryColor} />
      <Header />
      <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
