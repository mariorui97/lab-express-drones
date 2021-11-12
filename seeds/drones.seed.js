// Iteration #1

// SEEDING IS TO ENSURE OUR DB HAS SOME INITIAL DATA

// 1. MAKE THE DB CONNECTIONS
require('../db')
const mongoose = require('mongoose')

// 2. REQUIRE THE MODEL
let DroneModel = require('../models/Drone.model')

// 3. INSERT DATA IN THE MODEL
DroneModel.insertMany([
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
])
    .then((result) => {
        console.log('Drones inserted:' ,result.length)
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Error ', err)
        mongoose.connection.close()
    })

