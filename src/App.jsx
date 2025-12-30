import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Webinars from "./pages/webinars/Webinars";
import Internship from "./pages/internship/Internship";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/internships" element={<Internship />} />
      </Routes>
    </Router>
  );
}

export default App;
