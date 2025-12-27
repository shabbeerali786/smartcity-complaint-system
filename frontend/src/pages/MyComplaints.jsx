import ComplaintCard from "../components/ComplaintCard";

function MyComplaints() {
  const dummyData = [
    { title: "Street Light Issue", description: "Light not working on 5th street", status: "Pending", isEscalated: false },
    { title: "Water Leakage", description: "Pipe leaking near park", status: "Resolved", isEscalated: false },
    { title: "Road Damage", description: "Potholes on Main Road", status: "Pending", isEscalated: true }
  ];

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">My Complaints</h2>
        {dummyData.map((c, i) => <ComplaintCard key={i} complaint={c} />)}
      </div>
    </div>
  );
}

export default MyComplaints;
