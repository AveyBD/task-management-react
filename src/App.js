import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/Shared/404";
import Footer from "./Components/Shared/Footer";
import Nav from "./Components/Shared/Nav";
import Completed from "./Pages/Completed";
import Home from "./Pages/Home";
import MyCalendar from "./Pages/MyCalendar";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
