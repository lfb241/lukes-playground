import { Link, Route, Routes } from "react-router-dom";
import Search from "./Search";
// Hier Zusammenbauen der Komponenten + HTML
import Home from "./pages/home";


// TODO ADD ROUTING
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/form">AddData</Link> | {" "}
      </nav>

      <Routes>
        <Route path="/" element{<Home />} />
        <Route path="form"element{<AddData />} /> 

      </Routes>

    </div>
  );
}
