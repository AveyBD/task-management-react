import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Shared/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
