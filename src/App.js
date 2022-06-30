import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/Shared/404";
import Nav from "./Components/Shared/Nav";
import Calendar from "./Pages/Calendar";
import Done from "./Pages/Done";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Done />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
