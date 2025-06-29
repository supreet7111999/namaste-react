# Higher Order Components
- a component which takes a component as input enhance it and returns component.
                      _______
                     |       |
---->A Component --->| C Co. |----> B Component
                     |_______|
                     High Order
                     Component

- 

- in a.js file :

const A=()=>{

};

const C=(A)=>{
    return (props)=>{
        return (
        <div>Some Changes</div>
        <A props={..props}>
        )
    }
}

- in index.js

import C,A from a.js

const B=C(A);

  condition ? <B props={pr}> : <A props={pr}>