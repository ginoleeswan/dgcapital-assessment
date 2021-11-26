import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import View from "./Pages/View";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
