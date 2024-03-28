import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../sass/components/Layout.scss";

//  Mise en place du Layout, constitué des composants "Header" et "Footer" et appelé une fois pour toutes dans le composant général index.js

// Le props.children permet d'afficher toutes les autres pages ; entre notre Header et Footer

const Layout = (props) => {
  return (
    <div className="body">
      <div className="Layout">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
