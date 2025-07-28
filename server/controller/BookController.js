const Book = require('../model/BookM');
const User = require('../model/UserM');
const Table = require('../model/TableM');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { user, table, reservationTime, numberOfGuests, contactInfo, specialRequest } = req.body;
    const booking = new Book({
      user,
      table,
      reservationTime,
      numberOfGuests,
      contactInfo,
      specialRequest
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Book.find().populate('user').populate('table');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Book.findById(req.params.id).populate('user').populate('table');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking updated', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Book.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
