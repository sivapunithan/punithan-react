
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 Tag</h1>
/* <h1>i am h2 tag</h1> */
//     </div>
// </div>



        // const heading = React.createElement("h1",{id: "heading"}, "Hello world from React");
         const root =ReactDOM.createRoot(document.getElementById("root"));
        // // root.render(heading)

         const parent = React.createElement("div",{id:"parent"},
         React.createElement("div",{id:"child"},
         [React.createElement("h1",{},"I am h1 Tag"),
         React.createElement("h2",{}, "i am h2 tag")]
        )
         )

        const rc = React.createElement;
        console.log(rc)
        root.render(rc)
        
        
  