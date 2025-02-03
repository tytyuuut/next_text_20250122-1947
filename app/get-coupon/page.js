"use client";

import "@/style/get-coupon/style.css";

//compenents
import GetGood from "../../component/get-coupon/coupon-good/coupon-good";
import GetCoupons from "../../component/get-coupon/get-coupons/get-coupons";

export default function GetCoupon() {
  return (
    <>
      <main className="coupon">
        <GetGood />
        <GetCoupons />
      </main>
    </>
  );
}
