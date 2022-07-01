import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/Shared/404";
import Nav from "./Components/Shared/Nav";
import Done from "./Pages/Done";
import Home from "./Pages/Home";
import MyCalendar from "./Pages/MyCalendar";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Done />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
