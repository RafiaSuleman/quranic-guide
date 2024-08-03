import React from 'react'

const pricing = (props: { course: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; month: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; detail1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; detail2: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; detail3: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <div className="mt-4 max-w-sm mx-auto px-4 mt-16">
         <div className="bg-white border rounded text-center px-4 pt-6 pb-8 shadow">
             <h3 className="text2xl">
                 {props.course}
             </h3>
             <div className="mt-1">
                 <span className="font-bold text-3xl">{props.price} </span>
                 <span className="text-gray-600">{props.month}</span>
             </div>
             <div className="mt-6">
                 <div className="font-bold text-lg">{props.detail1}</div>
                 <div className="mt-3">{props.detail2}</div>
                 <div className="mt-3">{props.detail3}</div>
             </div>
             <div className="mt-8">
                 <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                     Get Started Today
                 </a>
             </div>
         </div>
     </div>
  )
}

export default pricing
