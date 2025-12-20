import Navbar from "../components/Navbar";
import ComplaintCard from "../components/ComplaintCard";

function OfficerDashboard() {
  const dummyComplaints = [
    { title: "Water Leakage", description: "Pipe leakage near park", status: "Pending", isEscalated: false },
    { title: "Street Light Issue", description: "5th street not working", status: "Pending", isEscalated: false }
  ];

  return (
    <div>
      <Navbar role="officer"/>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Officer Dashboard</h2>
        {dummyComplaints.map((c,i) => <ComplaintCard key={i} complaint={c} />)}
      </div>
    </div>
  );
}

export default OfficerDashboard;
