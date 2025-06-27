import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log("Child constructor");
    }
    componentDidMount(){
        console.log("Child didMount");
    }
    render(){
        console.log("Child render");
        return (
            <div>
                <h1>Child</h1>
            </div>
        );
    }
}

export default UserClass