"use client";

import Product from "../../component/cart/cart/product"
import ProductSilder from "../../component/cart/cart/product-silder"
import "@/style/cart/style.css";

export default function Cart() {
  return (
    <>
      <main className="cart-cart">
        <Product />
        <ProductSilder />
      </main>
    </>
  );
}
