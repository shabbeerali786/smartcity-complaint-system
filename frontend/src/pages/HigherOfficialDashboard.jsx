import Navbar from "../components/Navbar";
import ComplaintCard from "../components/ComplaintCard";

function HigherOfficialDashboard() {
  const escalatedComplaints = [
    { title: "Road Damage", description: "Potholes on Main Road", status: "Pending", isEscalated: true }
  ];

  return (
    <div>
      <Navbar role="higher"/>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Higher Official Dashboard</h2>
        {escalatedComplaints.map((c,i) => <ComplaintCard key={i} complaint={c} />)}
      </div>
    </div>
  );
}

export default HigherOfficialDashboard;
