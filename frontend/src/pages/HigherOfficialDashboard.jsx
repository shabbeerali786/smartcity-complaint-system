import { useState, useEffect } from "react";
import API from "../Api";

function HigherOfficialDashboard() {
  const [allComplaints, setAllComplaints] = useState([]);
  const [escalatedComplaints, setEscalatedComplaints] = useState([]);
  const [delayedComplaints, setDelayedComplaints] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [allRes, escalatedRes, delayedRes] = await Promise.all([
        API.get('/complaints'),
        API.get('/complaints/escalated'),
        API.get('/complaints/delayed')
      ]);
      
      setAllComplaints(allRes.data);
      setEscalatedComplaints(escalatedRes.data);
      setDelayedComplaints(delayedRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const getComplaintsToShow = () => {
    switch(activeTab) {
      case 'escalated': return escalatedComplaints;
      case 'delayed': return delayedComplaints;
      default: return allComplaints;
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">Higher Official Dashboard</h2>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{allComplaints.length}</div>
            <div className="text-sm text-gray-600">Total Complaints</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{escalatedComplaints.length}</div>
            <div className="text-sm text-gray-600">Escalated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{delayedComplaints.length}</div>
            <div className="text-sm text-gray-600">Delayed (&gt;3 days)</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Complaints ({allComplaints.length})
        </button>
        <button
          onClick={() => setActiveTab('escalated')}
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === 'escalated' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Escalated ({escalatedComplaints.length})
        </button>
        <button
          onClick={() => setActiveTab('delayed')}
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === 'delayed' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Delayed ({delayedComplaints.length})
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          {getComplaintsToShow().length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No complaints found in this category.
            </p>
          ) : (
            <div className="space-y-3">
              {getComplaintsToShow().map((complaint) => (
                <div key={complaint._id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{complaint.title}</h3>
                      <p className="text-gray-600 mt-1">{complaint.description}</p>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                        <span className="text-gray-500">Department: {complaint.department}</span>
                        <span className="text-gray-500">Area: {complaint.area}</span>
                        <span className={`font-medium ${
                          complaint.priority === 'High' ? 'text-red-600' : 
                          complaint.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          Priority: {complaint.priority}
                        </span>
                        <span className="text-gray-500">
                          Submitted: {new Date(complaint.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500">
                          By: {complaint.createdBy?.name || 'Unknown'}
                        </span>
                        {complaint.escalatedAt && (
                          <span className="text-red-600">
                            Escalated: {new Date(complaint.escalatedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                        complaint.status === 'Escalated' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HigherOfficialDashboard;
