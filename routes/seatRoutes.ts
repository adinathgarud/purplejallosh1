

import express, { Request, Response } from "express";
import {  getAvailableSeats, bookSeat } from "../controllers/seatController";

import { Visit } from '../models/Visit';

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


// API to get the visit count
router.get('/visit-count', async (req: Request, res: Response) => {
    try {
        let visit = await Visit.findOne();
        if (!visit) {
            visit = new Visit({ count: 0 });
            await visit.save();
        }
        res.json({ count: visit.count });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// API to increment the visit count
router.post('/increment-visit', async (req: Request, res: Response) => {
    try {
        let visit = await Visit.findOne();
        if (!visit) {
            visit = new Visit({ count: 0 });
        }
        visit.count += 1;
        await visit.save();
        res.json({ count: visit.count });
        console.log({ count: visit.count });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});








export default router;