// div div div child
const parent = React.createElement("div", {
    id: "Parent"
}, [
    React.createElement("div", {
        id: "child"
    }, React.createElement("h1", {
        id: "lets"
    }, "Hello World")),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("h1", {
        id: "lets"
    }, "Hello eeWorld"))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
