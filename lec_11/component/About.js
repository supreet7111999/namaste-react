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