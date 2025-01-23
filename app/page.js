"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "@/style/home/style.css";


//compenents
import Banner from "../component/home/banner/banner";
import New from "../component/home/new/new";
import HotProduct from "../component/home/hot-product/hot-product";
import AreaClass from "../component/home/area-class/area-class";
import HotArea from "../component/home/hot-area/hot-area";
import QnA from "../component/home/Q&A/Q&A";

export default function Home() {
  useEffect(() => {
    
    AOS.init({
      duration: 700, // 动画持续时间
      easing: "ease-in-out", // 动画缓动效果
      once: false, // 确保动画可以多次触发
      mirror: true, // 允许在滚动回到视口时触发动画
    });

    // 手动刷新 AOS 动画状态
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <>
      <main className="index">
        <Banner />
        <New />
        <HotProduct />
        <AreaClass />
        <HotArea />
        <QnA />
      </main>
    </>
  );
}
