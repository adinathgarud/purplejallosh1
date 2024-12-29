

import express, { Request, Response } from "express";
import {  getAvailableSeats, bookSeat } from "../controllers/seatController";

const router = express.Router();



// Get available seats
router.get("/events", async (req: Request, res: Response) => {
    try {
        await getAvailableSeats(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error fetching available seats" });
    }
});





// Book a seat
router.post("/book", async (req: Request, res: Response) => {
    try {
        await bookSeat(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error booking seat" });
    }
});

router.get("/demo", async (req, res) => {
    res.send("hello")
});






export default router;