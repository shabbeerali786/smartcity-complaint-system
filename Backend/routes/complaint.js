const express = require("express");
const Complaint = require("../models/Complaint");
const router = express.Router();

// Auto-escalate complaints pending for more than 3 days
const checkEscalation = async () => {
  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  await Complaint.updateMany(
    { 
      status: "Pending", 
      isEscalated: false,
      createdAt: { $lt: threeDaysAgo }
    },
    { 
      $set: { 
        status: "Escalated", 
        isEscalated: true,
        escalatedAt: new Date()
      }
    }
  );
};

// Run escalation check every hour
setInterval(checkEscalation, 60 * 60 * 1000);

router.post("/", async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.json({ message: "Complaint Added" });
});

router.get("/", async (req, res) => {
  const complaints = await Complaint.find().populate("createdBy", "name email");
  res.json(complaints);
});

// Get complaints by department (for officers)
router.get("/department/:department", async (req, res) => {
  const complaints = await Complaint.find({ department: req.params.department })
    .populate("createdBy", "name email");
  res.json(complaints);
});

// Get escalated complaints (for higher officials)
router.get("/escalated", async (req, res) => {
  const escalated = await Complaint.find({ isEscalated: true })
    .populate("createdBy", "name email");
  res.json(escalated);
});

// Get delayed complaints (pending > 3 days, for higher officials)
router.get("/delayed", async (req, res) => {
  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const delayed = await Complaint.find({ 
    status: "Pending", 
    createdAt: { $lt: threeDaysAgo }
  }).populate("createdBy", "name email");
  res.json(delayed);
});

// Update complaint status (for officers)
router.patch("/:id/status", async (req, res) => {
  const { status } = req.body;
  await Complaint.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: "Status updated" });
});

module.exports = router;
