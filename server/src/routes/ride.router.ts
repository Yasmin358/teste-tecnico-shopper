import { Router } from 'express';
import rideController from '../controllers/ride.controller';

const router = Router();

const rideController = new RideController();

router.get('/ride/{customer_id}?driver_id={id do motorista}', rideController.getAllRidesById.bind(rideController));
router.patch('/ride/confirm', rideController.createRide.bind(rideController));
router.post('/ride/estimate', rideController.findAll.bind(rideController));

export default router;