import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddComplaint from "./pages/AddComplaint";
import MyComplaints from "./pages/MyComplaints";
import OfficerDashboard from "./pages/OfficerDashboard";
import HigherOfficialDashboard from "./pages/HigherOfficialDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/my" element={<MyComplaints />} />
        <Route path="/officer" element={<OfficerDashboard />} />
        <Route path="/higher" element={<HigherOfficialDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
