import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("div", { id: "heading" }, [
//   React.createElement("h1", {}, "hey1"),
//   React.createElement("h1", {}, "hey2"),
// ]);
// console.log(element);

//JSX

const element = (
  <div>
    <h1>hey</h1>
    <h1>hey2</h1>
  </div>
);
console.log(element);

//functional component
const Element = () => (
  <div>
    {element}
    <h1>Lalit</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);