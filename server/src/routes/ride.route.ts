import * as express from 'express';
import rescue from 'express-rescue';
const rideController = require('../controllers/ride.controller');

const router = express.Router();


// router.get('/ride/{customer_id}?driver_id={id do motorista}', rideController.getAllRidesById.bind(rideController));
// router.patch('/ride/confirm', rideController.createRide.bind(rideController));
router.post('/ride/estimate', rescue((_req, res, _next) => rideController.findAllRides(_req, res)));

export default router;