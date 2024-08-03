import React from "react";
import pricingdetail from "./pricingdetails.js";
import FramerWrapper from "@/components/FramerWrapper";
import Pricing from "./pricing";
const text = () => {
const ncard =(val: { course: any; price: any; month: any; detail1: any; detail2: any; detail3: any; }) =>{
    return(
      <Pricing  course={val.course} price={val.price} month={val.month} detail1={val.detail1} detail2={val.detail2} detail3={val.detail3}/>
    ); 
  }
  return (
    <FramerWrapper y={0} scale={0.8}>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mt-[90px] mt-[40px] gap-9 grid-wrap">
        {pricingdetail.map(ncard)}
    </div>
    </FramerWrapper>
  );
};

export default text;
