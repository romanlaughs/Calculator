import React from "react";
import App from "../src/App.jsx";
import { createRoot } from 'react-dom/client';


const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);


const container = document.getElementById("root");
const rootTwo = createRoot(container);
rootTwo.render(<App />);
