import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddComplaint from "./pages/AddComplaint";
import MyComplaints from "./pages/MyComplaints";
import OfficerDashboard from "./pages/OfficerDashboard";
import HigherOfficialDashboard from "./pages/HigherOfficialDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-complaint" element={<AddComplaint />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/officer" element={<OfficerDashboard />} />
        <Route path="/higher-officer" element={<HigherOfficialDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
