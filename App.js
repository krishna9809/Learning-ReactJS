// div div div child

const parent = React.createElement("div", { id: "parent"}, 
    React.createElement("child", { id: "child"}, 
        React.createElement("h1", {id: "happy"}, "Hello I am Tree Like Stucture")
     ))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)