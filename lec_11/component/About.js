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


//in componentdidmount we do api call. 