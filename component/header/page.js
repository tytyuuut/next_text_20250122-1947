"use client";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "@/style/hander/style.css";

export default function HeaderPage() {
        // document.currentScript.insertAdjacentHTML("beforebegin", header);

        // // header

        // var header = document.querySelector("header");
        // var header_logo = document.querySelector(".header-logo");
        // window.addEventListener("scroll", function () {
        // if (window.scrollY > 0) {
        //     header.classList.add("active");
        //     header_logo.classList.add("active");
        //     up_icon.classList.add("active");
        // } else {
        //     header.classList.remove("active");
        //     header_logo.classList.remove("active");
        //     up_icon.classList.remove("active");
        // }
        // });

  return (
    <>
      <header
        className={"header d-flex justify-content-between align-items-center"}
        id="header"
      >
        <article className={"left-nav d-flex"}>
          <div className={"logo"}>
            <a href="index.html">
              <img
                className={"header-logo"}
                src="/images/header/logo.png"
                width={154}
                height={106}
                alt="logo"
              />
            </a>
          </div>
          <h1 className={"d-none"}>camping</h1>
        </article>
        <article className={"right-nav"}>
          <ul className={"d-flex justify-content-between align-items-center"}>
            <li className={"item"}>
              <a href="#">
                <p>找營區</p>
              </a>
            </li>
            <li className={"item"}>
              <a href="#">
                <p>商品列表</p>
              </a>
            </li>
            <li className={"item"}>
              <a href="#">
                <p>社群討論區</p>
              </a>
            </li>
            <li className={"item"}>
              <a href="#">
                <p>會員專區</p>
              </a>
            </li>
            <li className={"item"}>
              <form className={"d-flex"} role="search">
                <input
                  className={"form-control search-input"}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={"btn search-bg"} type="submit">
                  <img src="/images/header/search.png" />
                </button>
              </form>
            </li>
            <li className={"dropdown-center item"}>
              <a
                className={"dropdown-toggle"}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <img src="/images/header/cart.png" />
              </a>
              <ul className={"dropdown-menu"}>
                <div className={"memeber"}>
                  <div className={"main"}>
                    <article className={"title"}>
                      <h3>購物車</h3>
                    </article>
                    <ul className={"content"}>
                      <li className={"d-flex li"}>
                        <div className={"image"}>
                          <img src="/images/header/image 63.jpg" />
                        </div>
                        <div className={"text"}>
                          <p>3 人露營帳篷 MH100 Fresh</p>
                          <p>
                            <span>1</span> X NT$<span>1200</span>
                          </p>
                        </div>
                      </li>
                      <li className={"d-flex li"}>
                        <div className={"image"}>
                          <img src="/images/header/image 63.jpg" />
                        </div>
                        <div className={"text"}>
                          <p>3 人露營帳篷 MH100 Fresh</p>
                          <p>
                            <span>1</span> X NT$<span>1200</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <button>
                      <a href="cart.html" target="_blank">
                        訂單結帳
                      </a>
                    </button>
                  </div>
                </div>
              </ul>
            </li>
            <li className={"dropdown-center item"}>
              <a
                className={"dropdown-toggle"}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <img src="/images/header/camp_owner.png" />
              </a>
              <ul className={"dropdown-menu"}>
                <div className={"memeber"}>
                  <div className={"main"}>
                    <article className={"title"}>
                      <h3>營地專區</h3>
                    </article>
                    <ul className={"content"}></ul>
                    <button>
                      <a href="#">營主登入</a>
                    </button>
                  </div>
                </div>
              </ul>
            </li>
            <li className={"dropdown-center item"}>
              <a
                className={"dropdown-toggle"}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <img src="/images/header/user.png" />
                <span className={"num"}>1</span>
              </a>
              <ul className={"dropdown-menu"}>
                <div className={"memeber"}>
                  <div className={"main"}>
                    <article className={"title"}>
                      <h3>會員專區</h3>
                    </article>
                    <ul className={"content"}>
                      <li>
                        <a href="coupon.html" target="_blank">
                          <img
                            className={"member-img"}
                            src="/images/header/1737511517859.jpg"
                          />
                        </a>
                      </li>
                    </ul>
                    <button>
                      <a href="#">會員登入</a>
                    </button>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </article>
      </header>
    </>
  );
}
