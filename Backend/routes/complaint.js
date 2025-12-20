const express = require("express");
const Complaint = require("../models/Complaint");
const router = express.Router();

router.post("/", async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.json({ message: "Complaint Added" });
});

router.get("/", async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

module.exports = router;
