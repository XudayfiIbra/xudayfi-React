import { createRoot } from "react-dom/client";

let greeting = <h2>hello, welcome to react js</h2>;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(greeting);