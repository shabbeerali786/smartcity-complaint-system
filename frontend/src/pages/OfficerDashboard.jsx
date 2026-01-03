import { useState, useEffect } from "react";
import API from "../Api";
import ComplaintCard from "../components/ComplaintCard";

function OfficerDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [department, setDepartment] = useState("Water");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, [department]);

  const fetchComplaints = async () => {
    try {
      const response = await API.get(`/complaints/department/${department}`);
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
    setLoading(false);
  };

  const updateStatus = async (complaintId, newStatus) => {
    try {
      await API.patch(`/complaints/${complaintId}/status`, { status: newStatus });
      alert("Status updated successfully!");
      fetchComplaints();
    } catch (error) {
      alert("Error updating status");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">Officer Dashboard</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select Department:</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Water">Water</option>
          <option value="Electricity">Electricity</option>
          <option value="Road">Road</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid gap-4">
        {complaints.length === 0 ? (
          <p className="text-gray-500">No complaints found for {department} department.</p>
        ) : (
          complaints.map((complaint) => (
            <div key={complaint._id} className="bg-white p-4 rounded-lg shadow border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{complaint.title}</h3>
                  <p className="text-gray-600 mt-1">{complaint.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Area: {complaint.area}</p>
                    <p>Priority: <span className={`font-medium ${
                      complaint.priority === 'High' ? 'text-red-600' : 
                      complaint.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                    }`}>{complaint.priority}</span></p>
                    <p>Submitted by: {complaint.createdBy?.name || 'Unknown'}</p>
                    <p>Date: {new Date(complaint.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    complaint.status === 'Escalated' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
              </div>
              
              {complaint.status !== 'Resolved' && (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => updateStatus(complaint._id, 'Resolved')}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                  >
                    Mark Resolved
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OfficerDashboard;
