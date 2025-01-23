"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "@/style/hander/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/style/home/style.css";

import { Autoplay, Pagination } from "swiper/modules";

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

  // AOS.init({
  //   duration: 700, // 动画持续时间
  //   easing: "ease-in-out", // 动画缓动效果
  //   once: false, // 确保动画可以多次触发
  //   mirror: true, // 允许在滚动回到视口时触发动画
  // });
  return (
    <>
      <main className="index">
        <section className="banner">
          <article className="banner-main container">
            <article className="left-item d-flex">
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={700}
              >
                一起走進大自然 把煩惱留在帳篷外
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={800}
              >
                露營讓每一刻都值得珍藏
              </p>
            </article>
            <article
              className="right-item"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <Swiper
                modules={[Autoplay, Pagination]} // 注册所需模块
                spaceBetween={10} // 每个滑块之间的距离
                slidesPerView={1} // 一次显示一个滑块
                centeredSlides={true} // 居中显示
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }} // 启用分页
                className="mySwiper banner-swiper "
              >
                <SwiperSlide>
                  <img src="/images/index/banner.jpg" alt="sliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/index/banner.jpg" alt="sliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/index/banner.jpg" alt="sliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/index/banner.jpg" alt="sliderImg" />
                </SwiperSlide>
              </Swiper>
            </article>
          </article>
        </section>
        <section className="new">
          <h2
            className="title-style text-center"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
          >
            最新活動資訊
          </h2>
          <article className="bg" />
          <article
            className="new-main"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration={700}
          >
            <Swiper
              modules={[Autoplay, Pagination]} // 注册所需模块
              spaceBetween={97} // 每个滑块之间的距离
              slidesPerView={3.5} // 一次显示一个滑块
              centeredSlides={false} // 居中显示
              loop={true} // 循环
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper new-swiper "
            >
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image8.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image9.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image10.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image8.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image9.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image10.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div className="image">
                    <img src="/images/index/image9.jpg" alt="img" />
                  </div>
                  <p>3 人露營帳篷 MH100 Fresh</p>
                </a>
              </SwiperSlide>
            </Swiper>
          </article>
        </section>
        <section className="d-flex product">
          <h2
            className="title-style text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            熱門商品
          </h2>
          <article className="product-main">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image 21.jpg" alt="img" />
                </div>
                <h3 className="title">3 人露營帳篷 MH100 Fresh</h3>
                <p className="price">
                  $<span>2,999</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image 22.jpg" alt="img" />
                </div>
                <h3 className="title">3 人露營帳篷 MH100 Fresh</h3>
                <p className="price">
                  $<span>2,999</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image 63.jpg" alt="img" />
                </div>
                <h3 className="title">4 人露營穿骨快開帳篷 Arpenaz</h3>
                <p className="price">
                  $<span>1,499</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image 65.jpg" alt="img" />
                </div>
                <h3 className="title">3 人露營帳篷 MH100 Fresh</h3>
                <p className="price">
                  $<span>2,999</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image 66.jpg" alt="img" />
                </div>
                <h3 className="title">雙人多日登山圓頂帳篷 MT500 Mesh</h3>
                <p className="price">
                  $<span>4,499</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image (1).jpg" alt="img" />
                </div>
                <h3 className="title">6 人露營穿骨客廳帳 Arpenaz Base</h3>
                <p className="price">
                  $<span>6,499</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image (2).jpg" alt="img" />
                </div>
                <h3 className="title">雙人獨立式三季多日登山帳篷</h3>
                <p className="price">
                  $<span>2,999</span>
                </p>
              </span>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <span className="item">
                <div className="image">
                  <img src="/images/index/image (3).jpg" alt="img" />
                </div>
                <h3 className="title">6 人露營穿骨客廳帳 Arpenaz Base</h3>
                <p className="price">
                  $<span>6,499</span>
                </p>
              </span>
            </a>
          </article>
        </section>
        <section className="d-grid area">
          {/*  */}
          <svg
            className="waves top"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#EFEEE5" />
            </g>
          </svg>
          {/*  */}
          <h2
            className="title-style text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            地區分類
          </h2>
          <article className="area-main container">
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item medium"
            >
              <div className="image ">
                <div className="mask" />
                <h4>桃園市</h4>
                <img src="/images/index/image 52.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>嘉義市</h4>
                <img src="/images/index/Frame 367.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item large"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
            {/*  */}
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item medium"
            >
              <div className="image ">
                <div className="mask" />
                <h4>桃園市</h4>
                <img src="/images/index/image 52.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item large"
            >
              <div className="image ">
                <div className="mask" />
                <h4>台南市</h4>
                <img src="/images/index/Frame 367.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item medium"
            >
              <div className="image ">
                <div className="mask" />
                <h4>桃園市</h4>
                <img src="/images/index/image 52.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item large"
            >
              <div className="image ">
                <div className="mask" />
                <h4>嘉義市</h4>
                <img src="/images/index/Frame 367.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item medium"
            >
              <div className="image ">
                <div className="mask" />
                <h4>桃園市</h4>
                <img src="/images/index/image 52.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item large"
            >
              <div className="image ">
                <div className="mask" />
                <h4>嘉義市</h4>
                <img src="/images/index/Frame 367.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>苗栗縣</h4>
                <img src="/images/index/Frame 368.jpg" alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="item small"
            >
              <div className="image ">
                <div className="mask" />
                <h4>新北市</h4>
                <img src="/images/index/Mask group.jpg" alt="img" />
              </div>
            </div>
          </article>
          {/*  */}
          <svg
            className="waves bottom"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#EFEEE5" />
            </g>
          </svg>
          {/*  */}
        </section>
        <section className="d-flex hot">
          <h2
            className="title-style text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            熱門露營地點
          </h2>
          <article className="container hot-main">
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot1.jpg" alt="img" />
              </div>
              <p>435挑水少年家</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot2.jpg" alt="img" />
              </div>
              <p>谷漢露營區</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot3.jpg" alt="img" />
              </div>
              <p>3 人露營帳篷 MH100 Fresh</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot4.jpg" alt="img" />
              </div>
              <p>435挑水少年家</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot5.jpg" alt="img" />
              </div>
              <p>松鶴延年</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot6.jpg" alt="img" />
              </div>
              <p>橘子園</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot7.jpg" alt="img" />
              </div>
              <p>露薩</p>
            </a>
            <a
              href="#"
              className="item"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="image">
                <img src="/images/index/hot8.jpg" alt="img" />
              </div>
              <p>星空下</p>
            </a>
          </article>
        </section>
        <section className="d-flex fa">
          <h2
            className="title-style text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            Q&amp;A
          </h2>
          <div className="FQA-main container">
            <div
              className="left-item"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    姓名:
                  </label>
                  <input
                    type="text"
                    className="form-control focus-ring"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tel" className="form-label">
                    電話:
                  </label>
                  <input
                    type="tel"
                    className="form-control focus-ring"
                    id="tel"
                    aria-describedby="emailHelp"
                    placeholder="請輸入電話"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control focus-ring"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    地址:
                  </label>
                  <input
                    type="text"
                    className="form-control focus-ring"
                    id="address"
                    aria-describedby="emailHelp"
                    placeholder="請輸入地址"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="other" className="form-label">
                    其他:
                  </label>
                  <textarea
                    type="text"
                    className="form-control focus-ring"
                    id="other"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                    rows={4}
                    cols={50}
                    defaultValue={"                            "}
                  />
                </div>
                <button type="submit" className="submit btn btn-primary">
                  送出
                </button>
              </form>
            </div>
            <div
              className="right-item"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <img src="/images/index/fa-bg.jpg" alt="img" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
