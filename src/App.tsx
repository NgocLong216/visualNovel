import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:character" element={<Story />}
      />
    </Routes>
  );
}

export default App;