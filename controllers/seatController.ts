


import { Request, Response } from "express";
import Event from "../models/seatModel";



// Fetch available seats
export const getAvailableSeats = async (_: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.json(events);
    console.log(events);
  } catch (error) {
    res.status(500).send(error);
  }
};









// Book a seat
export const bookSeat = async (req: Request, res: Response) => {
  const { eventId } = req.body;

  try {
    const event = await Event.findById(eventId);

    if (event && event.availableSeats > 0) {
      event.availableSeats -= 1;
      await event.save();
      res.json({ success: true, message: 'Booking successful', event });
    } else {
      res.status(400).json({ success: false, message: 'No seats available' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};










