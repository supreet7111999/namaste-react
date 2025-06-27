import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent didMount");
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>Parent</h1>
                <UserClass/>
            </div>
        );
    }
}
import UserClass from "./UserClass";

export default About


// In this O/P will be
// Parent Constructor
//Parent render
//child constructor
// child render
//child didmount
//parent didmount


// if multiple userClass then order will be:
//Parent cons
//parent render
//child1 cons
//child1 ren
//child2 cons
//child2 ren
//child1 didmount
//child2 didmount
//parent didmount
// goto react life cycle diag. to know in more detail
// https://www.scholarhat.com/tutorial/react/react-lifecycle-methods

//in componentdidmount we do api call. :
// async componentDidMount(){
//     const data=await fetch(url);
//     const json=await data.json();
//     this.setState({
//         userInfo:json,
//     });
// }

//lifecycle for data fectch:
// mounting cycle finishes as component is mounted once .
// now the updating cycle will begin:
// goto lifecycle data.
  // https://www.scholarhat.com/tutorial/react/react-lifecycle-methods



// Lifecycle in detail

// --Mounting--
// constructor(dummy)
//render (dummy)
//   <HTML Dummy>
// component didmount
//   <API Call>
//   <this.setState-> State var. are updated

//---Update
//  render(API Data)
//  <HTML (new API datA)
// componentDid Update

// --Unmounting 
// componentWillUnmount()

// Chunking/Code Splitting / Dynamic Bundling / Lazy Loading / on demand loading:
// We need to make small bundle chunks , this is good for scaling our website.
// We need to import lazy loading bundle using below code.
// import Rect ,{lazy , suspense} from "react";
//
// const Grocery=lazy(()=>{
//    import("./component/Grocery")
// })
// to handle or use GRocery use below:
//
// <Suspense fallback={<h1>Loading Groxery Page</h1>}><Grocery></Suspense>



