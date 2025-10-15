import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Schnittstelle zwischen App und index.html

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App /> //Schnittstelle zum HTML
    </BrowserRouter>
  );
} else {
  console.error("Root-Element nicht gefunden!");
}
