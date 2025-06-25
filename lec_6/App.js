import React from "react";
import ReactDOM  from "react-dom/client"
import {headingF} from "./AppReact"
const head=React.createElement("h1",
{id:"heading",xyz:"abc"},
"Hello King from React !");

//JSX - HTML like syntax not html

const x=100;
const y= <h3>This is React element</h3>
const jsxHeading =()=>(
    <>
  <h1>Rish is king</h1>
  <h2>{x}</h2>
  {y}
  <headingF/>
  </>
  )

// we can inject js in { js } in jsx.


//Component composition -> when you composing two components into another is called ...


//jsx is just a syntax to create react element .
// jsx is diff. react is diff
// abpve one is not a purely js , so what is happening in background is
// babel is converting(transpile ) the jsx to the format understood by browser i.e. js
// JSX -> React.createElement -> ReactElement -> HTMLElement(render).
// this process of conversion is done by babel
// we use camelcase while writing attributes in jsx.
// while writing jsx in multiple lines , we need to wrap it in ( JSXCode )
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<jsxHeading/>);

//while rendering a functional component it should be usead as a html tag

