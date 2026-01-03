import { useState } from "react";
import API from "../Api";

function AddComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("Water");
  const [area, setArea] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submitComplaint = async (e) => {
    e.preventDefault();

    try {
      await API.post("/complaints", {
        title,
        description,
        department,
        area,
        priority,
      });

      alert("Complaint submitted successfully ✅");
      setTitle("");
      setDescription("");
      setArea("");
      setDepartment("Water");
      setPriority("Medium");
    } catch (error) {
      alert("Error submitting complaint ❌");
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add Complaint</h2>

      <form onSubmit={submitComplaint} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter complaint title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="Describe your complaint in detail"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Water">Water</option>
            <option value="Electricity">Electricity</option>
            <option value="Road">Road</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Area</label>
          <input
            type="text"
            placeholder="Enter area/location"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default AddComplaint;
