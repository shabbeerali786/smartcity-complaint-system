import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddComplaint from "./pages/AddComplaint";
import MyComplaints from "./pages/MyComplaints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/my" element={<MyComplaints />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
