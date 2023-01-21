import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ButtonAppBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
