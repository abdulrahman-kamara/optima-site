import "./App.css";
import { createRoot } from "react-dom/client";
import NavMenu from "./components/Nav";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
