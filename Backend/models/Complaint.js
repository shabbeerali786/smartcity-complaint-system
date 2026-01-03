const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  department: {
    type: String,
    required: true,
    enum: ["Water", "Electricity", "Road", "Sanitation", "Health", "Other"]
  },
  area: String,
  priority: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"],
    default: "Medium"
  },
  status: {
    type: String,
    enum: ["Pending", "Resolved", "Escalated"],
    default: "Pending"
  },
  isEscalated: {
    type: Boolean,
    default: false
  },
  escalatedAt: Date,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Complaint", ComplaintSchema);
