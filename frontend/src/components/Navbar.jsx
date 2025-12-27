import { Link } from "react-router-dom";

function Navbar({ role }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">Smart City Complaints</div>
      <div className="space-x-4">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        {role === "citizen" && <Link to="/add-complaint">Add Complaint</Link>}
        {role === "citizen" && <Link to="/my-complaints">My Complaints</Link>}
        {role === "officer" && <Link to="/officer">Dashboard</Link>}
        {role === "higher" && <Link to="/higher-officer">Higher Official</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
