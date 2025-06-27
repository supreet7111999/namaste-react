# useEffect hook : 
-useEffect(()=>{

},[])

- it is called everytime ,any useState changes or render if no dependency array.
- it is called only once if dependencyy array is blank.
- it is called only when dependecy changes.

# useState hook:
-it is used for creating local state var.
- it is must to create them in the body.
- never create useState in if else , functions , for loop it cause inconsistency.
- try to keep them at top in the body.

# react-router dom
import {createBrowserRouter,RouterProvider} form "react-router-dom

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout>,
        errorElement: <Error>  // this will show Error page if wrong path
    },
    {
        path:"/home",
        element: <Home>
    }
])

root.render(<RouterProvider router={appRouter} />);

# children routes
import {Outlet} from "React-router-dom";

const AppLayout=()=>{
    return (
        <div className="root">
          <Header>
          <Outlet>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout>,
        errorElement: <Error>  // this will show Error page if wrong path
        children: [
        {
         path:"/home",
         element: <Home>
        },
        {
         path:"/contact",
         element: <Contact>
        }    
        ]
    }
])

# Creating Link (Nav)
- never use an anchor tag , as it will make whole page to re-load.
- will be using "Link" it just refreshes the components (i.e. single page website) via client side routing . 

import {Link} from "react-router-dom"

<link to="/about">Home</Link >