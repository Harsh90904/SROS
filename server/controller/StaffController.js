const Staff = require('../model/restornt_staffM');

// Create a new staff member
exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json({ message: 'Staff created successfully', staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single staff member by ID
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a staff member
exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json({ message: 'Staff updated', staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a staff member
exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json({ message: 'Staff deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
