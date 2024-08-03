import React from "react";
import Card from "./card";
import data from "./details.js";
import FramerWrapper from "@/components/FramerWrapper";
const text = () => {
  const ncard =(val: { description: string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) =>{
    return(
      <Card  description={val.description} name={val.name}/>
    ); 
  }
  return (
    <FramerWrapper y={0} scale={0.8}>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-9 gap-7">
         {data.map(ncard)}

     </div>
     </FramerWrapper>
   );
};

export default text;
