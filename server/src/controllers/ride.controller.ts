import { Request, Response } from 'express';
import RideService from '../services/ride.service';

class MatcheController {
    constructor(
      private rideService = new RideService(),
    ) {}
    
    findAll = async (req: Request, res: Response) => {
        const result = await this.rideService.findAll();
        return res.status(200).json(result);
    }
    
    createRide = async (req: Request, res: Response) => {
        const newRide = req.body;
        const result = await this.rideService.create(newRide);
        return res.status(201).json(result);
    };
    
    getAllRidesById = async (req: Request, res: Response) => {
        const { costumer_id, driver_id} = req.params;
        const { type, message } = await this.rideService.findById(Number(costumer_id));
        if (type === '200') return res.status(200).json(message);
        return res.status(404).json({ message });
    };
    
    