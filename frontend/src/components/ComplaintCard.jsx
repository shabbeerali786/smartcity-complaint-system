function ComplaintCard({ complaint }) {
  let statusColor = 
    complaint.isEscalated ? "bg-red-100 border-red-500" :
    complaint.status === "Resolved" ? "bg-green-100 border-green-500" :
    "bg-yellow-100 border-yellow-500";

  return (
    <div className={`border-l-4 p-4 my-2 ${statusColor}`}>
      <h3 className="font-bold text-lg">{complaint.title}</h3>
      <p>{complaint.description}</p>
      <p>Status: <span className="font-semibold">{complaint.status}</span></p>
      {complaint.isEscalated && <p className="text-red-600 font-bold">Escalated</p>}
    </div>
  );
}

export default ComplaintCard;
