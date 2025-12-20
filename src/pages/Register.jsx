import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Name:", name, "Email:", email, "Password:", password);
    alert("Register clicked (temporary)");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input className="w-full p-2 mb-2 border rounded" placeholder="Name"
               onChange={e => setName(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" placeholder="Email"
               onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" placeholder="Password" type="password"
               onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white p-2 rounded w-full" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
