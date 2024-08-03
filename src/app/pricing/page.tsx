import React from "react";
import pricingdetail from "./pricingdetails.js";

import Pricing from "./pricing";
const text = () => {
const ncard =(val: { course: any; price: any; month: any; detail1: any; detail2: any; detail3: any; }) =>{
    return(
      <Pricing  course={val.course} price={val.price} month={val.month} detail1={val.detail1} detail2={val.detail2} detail3={val.detail3}/>
    ); 
  }
  return (
   <div className="flex flex-row">
        {pricingdetail.map(ncard)}
    </div>
  );
};

export default text;
