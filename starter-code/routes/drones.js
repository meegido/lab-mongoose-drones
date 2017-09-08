const express = require('express');
const router = express.Router();
const Drone = require ('../models/drones');



router.get('/', (req, res, next) => {
  Drone.find({},(err, drones)=> {
    if (err){return next(err); }
    res.render('drones/drones-list', {
      title: 'Drone list',
      drones: drones
    })
  })
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {
    title: "Add new drone"
  })
});

router.post('/drones/new', (req, res, next) => {
  let oneMoreDrone = { // objeto normal
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  const newDrone = new Drone(oneMoreDrone); // creo una instancia nueva con Schema de Mongoose del modelo Drone
  newDrone.save((err) => { //estoy usando un método de mongoose
    if (err) { return next(err); }
    return res.redirect('/'); //redirijo al root porque es donde he puesto el listado
  });

})

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
