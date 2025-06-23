
const head=React.createElement("h1",
{id:"heading",xyz:"abc"},
"Hello King from React !");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(head);


//in createElement fun , 2nd arg are props or attributes
// to create sibbling , we can pass the 3rd arg. as the array of children
// i.e 
// const parent =React.createElement("tag",{"attribute"},
//["child1","child2"]
//)