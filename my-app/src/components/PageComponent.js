import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageComponent(children) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}