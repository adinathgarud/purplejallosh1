import mongoose from "mongoose";
import Event from "./models/seatModel"; // Import the Event model


// Load environment variables


// MongoDB Connection

mongoose
  .connect("mongodb+srv://rugveddeshmukh00:4QgYklgqSjO5sKko@post.t239k.mongodb.net/purplejallosh")
  .then(() => {
    console.log("Connected to MongoDB for seeding.");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Define the default events
const events = [
  { day: "DayFirst", name: "Panel Discussion on Prevention, Early Detection and Early Intervention", availableSeats: 150, time: "10:00AM - 11:00AM", speakers: " Dr. Varsha Gattu, Dr. Vachasundar, Pankaj Waghmare, Dr. Sameer Dalwai - Moderator." },
  { day: "DayFirst", name: "UDID and its importance", availableSeats: 150, time: "11:00AM - 12:00PM", speakers: "Abhijit Raut, Anjali Nilekar, Shri Shingade, Sangita Kalbhor" },
  { day: "DayFirst", name: "Inclusive Film Screening and Interaction", availableSeats: 150, time: "12:00PM - 01:00PM", speakers: " We Care" },
  { day: "DayFirst", name: "Importance of Therapy", availableSeats: 150, time: "02:00PM - 03:00PM", speakers: "Dr. Rajiv Sharangpani, Dr. Varsha Deshpande, Samruddhi Kulkarni, Dr. Meenakshi Kamble, Shrirang Bijur - Moderator" },
  { day: "DayFirst", name: "Importance of Assistive devices / Limbs", availableSeats: 150, time: "03:00PM - 04:00PM", speakers: "Gote (Alimco), Dr. Sahoo, Manav Kamble - Moderator, Dr. Anap (Nagar DDRC)" },
  { day: "DayFirst", name: "Inclusive Film Screening and Interaction", availableSeats: 150, time: "04:00PM - 05:00PM", speakers: "We Care" },

  { day: "DayTwo", name: "Skilling and Vocational Training", availableSeats: 150, time: "10:00AM - 11:00AM", speakers: "Bhushan Punani - Moderator, Meenakshi Nikam" },
  { day: "DayTwo", name: "Inclusive higher Education / Integration", availableSeats: 150, time: "11:00AM - 12:00PM", speakers: "Yajurvendra Mahajan, Jaee Khamkar, Jai Vakil Foundation" },
  { day: "DayTwo", name: "Film / Interaction", availableSeats: 150, time: "12:00PM - 01:00PM", speakers: "We Care" },
  { day: "DayTwo", name: "Employment and self employment", availableSeats: 150, time: "02:00PM - 03:00PM", speakers: "Shruti Pushkarna - Moderator, Shanti Raghavan, Bhavesh Bhatia" },
  { day: "DayTwo", name: "Prevention, Early Detection, Early Intervention", availableSeats: 150, time: "03:00PM - 04:00PM", speakers: "Dr. Varsha Gattu, Dr. Vachasundar, Pankaj Waghmare , Dr Sameer Dalwai - Moderator" },
  { day: "DayTwo", name: "Inclusive Film Screening and Interaction", availableSeats: 150, time: "04:00PM - 05:00PM", speakers: "We Care" },

  { day: "DayThird", name: "Sports as therapy and career", availableSeats: 150, time: "10:00AM - 11:00AM", speakers: "Bal Kalyan Sanstha, Vaishnavi Jagtap, Shri Kumbhar" },
  { day: "DayThird", name: "National Trust /Guardianship / Reality", availableSeats: 150, time: "11:00AM - 12:00PM", speakers: "Bhagyashri More, Nandkurmar Phule, Agarkar Madam, Rajendra Waghchaure" },
  { day: "DayThird", name: "Inclusive Film Screening and Interaction", availableSeats: 150, time: "12:00PM - 01:00PM", speakers: "We care" },
  { day: "DayThird", name: "Act Implementation and Advocacy", availableSeats: 150, time: "02:00PM - 03:00PM", speakers: "Armaan Ali, Kanchan Pamnani, Jasmina Khanna, Davkhar Madam, Suhas Tendulkar" },
  { day: "DayThird", name: "What after Us", availableSeats: 150, time: "03:00PM - 04:00PM", speakers: "Achyut Godbole, Vidya Phadke, Ambika Takalkar, A B Rajmane" },
  { day: "DayThird", name: "Action Plan", availableSeats: 150, time: "04:00PM - 05:00PM", speakers: "Armaan,Vijay Kanhekar, Abhijit Murugkar, Omprakash Deshmukh, Paresh Gandhi, Manav Kamble" },
];





// Seed the database
const seedEvents = async () => {
  try {
    await Event.deleteMany(); // Clear existing events
    await Event.insertMany(events); // Insert new events
    console.log("Events seeded successfully.");
    console.log(events);



    mongoose.disconnect(); // Close the connection
  } catch (error) {
    console.error("Error seeding events:", error);
    mongoose.disconnect(); // Close the connection on error
  }
};



seedEvents();


