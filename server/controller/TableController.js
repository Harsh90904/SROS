const Table = require('../model/TableM');

// Create a new table
exports.createTable = async (req, res) => {
  try {
    const table = new Table(req.body);
    await table.save();
    res.status(201).json({ message: 'Table created successfully', table });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tables
exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single table by ID
exports.getTableById = async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    if (!table) return res.status(404).json({ message: 'Table not found' });
    res.status(200).json(table);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a table
exports.updateTable = async (req, res) => {
  try {
    const table = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!table) return res.status(404).json({ message: 'Table not found' });
    res.status(200).json({ message: 'Table updated', table });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a table
exports.deleteTable = async (req, res) => {
  try {
    const table = await Table.findByIdAndDelete(req.params.id);
    if (!table) return res.status(404).json({ message: 'Table not found' });
    res.status(200).json({ message: 'Table deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
