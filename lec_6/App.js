import React from "react";
import ReactDOM  from "react-dom/client"

const head=React.createElement("h1",
{id:"heading",xyz:"abc"},
"Hello King from React !");

//JSX - HTML like syntax not html
const jsxHeading=<h1>Rish is king</h1>
//jsx is just a syntax to create react element .
// jsx is diff. react is diff
// abpve one is not a purely js , so what is happening in background is
// babel is converting(transpile ) the jsx to the format understood by browser i.e. js
// JSX -> React.createElement -> ReactElement -> HTMLElement(render).
// this process of conversion is done by babel
// we use camelcase while writing attributes in jsx.
// while writing jsx in multiple lines , we need to wrap it in ( JSXCode )
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

