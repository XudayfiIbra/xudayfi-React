import { createRoot } from "react-dom/client";

let greeting = 
  <div>
    <label>Enter your full name</label>
    <input type="text" placeholder="John alex fen"></input>
  </div>

const container = document.getElementById("root");
const root = createRoot(container);

root.render(greeting);