const mongoose = require("mongoose")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const Drone = new mongoose.Schema(
  {
    name: String,    
    propellers: Number,
    maxSpeed: Number
}
);

const DroneModel = mongoose.model("Drone", Drone);

module.exports = DroneModel;

