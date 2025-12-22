import { useState } from "react";
import API from "../Api";

function AddComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitComplaint = async (e) => {
    e.preventDefault();

    try {
      await API.post("/complaints", {
        title,
        description,
      });

      alert("Complaint submitted successfully ✅");
      setTitle("");
      setDescription("");
    } catch (error) {
      alert("Error submitting complaint ❌");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Complaint</h2>

      <form onSubmit={submitComplaint}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddComplaint;
