const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => { 

  DroneModel.find()
  .then((drones) => {
    res.render("drones/list.hbs" ,{drones})
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body

  DroneModel.create({name, propellers, maxSpeed})
        .then(() => {
            res.redirect('/drones')
        })
        .catch((error) => {
            next(error)
        })

});

router.get('/drones/:droneId/edit', (req, res, next) => {
  const {droneId} = req.params

  DroneModel.findById(droneId)
      .then((drone) => {
          res.render('drones/update-form.hbs', {drone})
      })
      .catch(() => {
          next('Single todo fetch failed')
      })
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  //We get this information from the form that the user submits
  const {name, propellers, maxSpeed} = req.body

  // we grab the dynamic id from the url
  const {droneId} = req.params

  DroneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}) 
        .then(() => {
            res.redirect('/drones')
        })
        .catch((drone) => {
            res.render('drones/update-form.hbs', {drone} )
        })
});

  

router.get('/drones/:droneId/delete', (req, res, next) => {
   //grab the droneId from the url
   const {droneId} = req.params 
    
   // Delete from the database
   DroneModel.findByIdAndDelete(droneId)
       .then(() => {
           //then send the user to the home page
           res.redirect('/')
       })
       .catch(() => {
           next('Drone delete failed')
       })
});

module.exports = router;
