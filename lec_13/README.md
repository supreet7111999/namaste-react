# Redux : predicatbe state container for JS App
-It is not mandatory
-Handlind data , managing store.
-Other store manager are zudstand

# Theory for writing data:
- First we click on add button then it will dispatch some actions which will call some functions(reducers) and those fns will update or write data in a particular slice(cartSlice).    

# Theory for reading data :
-We will use selector and it will give us data.
-Subscribing to the store means syncing with the stor i.e. when data in our slice will change then our UI will also change

# Steps
1) Install redux/toolkit and react-redux
2) Build store
3) Connect store to our app
4) create slice
5) Dispatch actions
6) Selector

- in appStore.js //build store

import {configureStore} from "@reduc/toolkit"
import cartReducer from "./cartSlice" 

const appStore=configureStore({
    reducer:{
      cart:cartReducer,
    },
});

export default appStore.


- in app.js  // connect store to our app

import {Provider} from "react-redux"
import appStore from "appStore"

...
return (
<Provider store={appStore}>
  <UserContext>
   <div> 
     ...
    </div> 
  </UserContext>
</Provider>
)

- in cartSlice.js //creating slice

import {createSlice} from "@reducx/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state,action)=>{
            state.items.length=0;
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSLice.actions;

export default cartSlice.reducer ; //exporting the reducer

-in header.js //reading data .
import {useSelector} from "react-redux"

const Header=()=>{
    const cartItems=useSelector((state)=>state.cart.items);
    return (
        <div> {cartItems.length}</div>
    )
}