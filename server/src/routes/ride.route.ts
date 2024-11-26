import * as express from 'express';
import { findAll } from '../controllers/ride.controller';

const router = express.Router();


// router.get('/ride/{customer_id}?driver_id={id do motorista}', rideController.getAllRidesById.bind(rideController));
// router.patch('/ride/confirm', rideController.createRide.bind(rideController));
router.post('/ride/estimate', findAll );

export default router;