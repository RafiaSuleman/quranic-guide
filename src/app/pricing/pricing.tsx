import React from "react";

const pricing = (props: {
  course:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  price:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  month:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  detail1:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  detail2:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  detail3:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
   
      <div className="border border-2 gap-4  border-green-600 rounded-lg px-2 py-5">
        <div className="text-4xl font-bold flex justify-center items-center mb-4">
          {props.course}
        </div>
        <div className="border border-1  border-green-700 border-b"></div>
        <div className="mt-4 text-3xl flex justify-center items-center ">
          {props.price}{" "}
        </div>
        <div className="text-2xl flex justify-center items-center ">
          {" "}
          {props.month}
        </div>

        <div>
          <div className="flex justify-center items-center mt-3">
            {props.detail1}
          </div>
          <div className="flex justify-center items-center ">
            {props.detail2}
          </div>
          <div className="flex justify-center items-center ">
            {props.detail3}
          </div>
        </div>
        <div className="mt-3 flex justify-center items-center">
          <a href="" className="bg-green-400 px-3 py-3 rounded-lg">
            Get Started
          </a>
        </div>
      </div>
  );
};

export default pricing;
