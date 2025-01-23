"use client";
import { useEffect } from "react";

import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import UpIcon from "@/component/up-icon/up-icon";
import "@/node_modules/font-awesome/css/font-awesome.min.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    var header = document.querySelector("header");
    var header_logo = document.querySelector(".header-logo");
    var up_icon = document.querySelector(".up-icon");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.classList.add("active");
        header_logo.classList.add("active");
        up_icon.classList.add("active");
      } else {
        header.classList.remove("active");
        header_logo.classList.remove("active");
        up_icon.classList.remove("active");
      }
    });
  });
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <UpIcon />
      </body>
    </html>
  );
}
