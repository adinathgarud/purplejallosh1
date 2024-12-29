


import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  day : {type: String, required: true},
  name: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  time: {type:String, required:true},
  speakers:{type:String, required:true}
});

const Event = mongoose.model('Event', eventSchema);

export default Event;


