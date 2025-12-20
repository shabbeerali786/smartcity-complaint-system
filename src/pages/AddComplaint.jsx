import { useState } from "react";
import Navbar from "../components/Navbar";

function AddComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Title:", title, "Description:", description);
    alert("Complaint added (temporary)");
  };

  return (
    <div>
      <Navbar role="citizen"/>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Add Complaint</h2>
        <input className="w-full p-2 mb-2 border rounded" placeholder="Title" 
               onChange={e => setTitle(e.target.value)} />
        <textarea className="w-full p-2 mb-2 border rounded" placeholder="Description" 
                  onChange={e => setDescription(e.target.value)} />
        <button className="bg-blue-600 text-white p-2 rounded w-full" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddComplaint;
