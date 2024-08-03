import React from "react";
import Card from "./card";
import data from "./details.js";
const text = () => {
  const ncard =(val: { description: string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) =>{
    return(
      <Card  description={val.description} name={val.name}/>
    ); 
  }
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-9 ">
         {data.map(ncard)}

     </div>
   );
};

export default text;
