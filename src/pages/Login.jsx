import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    alert("Login clicked (temporary)");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 mb-2 border rounded" placeholder="Email" 
               onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" placeholder="Password" type="password"
               onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white p-2 rounded w-full" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
