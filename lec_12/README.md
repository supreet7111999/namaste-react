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

--------------------------------------------------------------------------------------------------------

Each react component has 2 layers :
1) UI Layer
2) Data layer

UI is powered by data layer.
Data layer is like props , state and more.

--------------------------------------------------------------------------------------------------------

# Controlled and UnControlled Component.

- Parent have the control over its children. (Ex- Making accordion for restaurant menu items.)
- If child is controlled by parent then it is controlled component.

# Lifting state up 

-"Lifting state up" in React is a pattern for managing shared state among multiple components. Instead of each component maintaining its own separate state, the shared state is moved to their closest common ancestor component. This ancestor then becomes the "single source of truth" for that particular piece of data. 
   