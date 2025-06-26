# Exporting 2 types
- default export :
   - export default oneComponent
- named export : when exporting   more than one component
   - export const oneComponent
   - export const twoComponent

# Importing 2 types
- when named export :
   -   import { oneComponent } from "...path" 

# React Hooks
 - Normal JS utility functions

# whenever a state variable updates , react re-render the component

# why react fast because it is doing dom manipulation very fast (diff algo) 
 - it uses reconciliation (react-fiber) algo.
 - virtual dom : it is representation (js  object) of acutual dom 
 - it finds out the diff. b/w the old virtual dom and new virtual dom , created after button click (ex. updation of list of restaurants) then it will update the dom based on that diff.