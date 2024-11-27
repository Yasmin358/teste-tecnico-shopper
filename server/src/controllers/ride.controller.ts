import { Request, Response } from 'express';
import RideService from '../services/ride.service';
import computeRoute from '../api/routesApi';

const findAllRides = async (req: Request, res: Response) => 
{
    const { origin, destination, costumer_id } = req.body;
    if(origin == null || destination == null || costumer_id == null ) {
        return res.status(400).json({"error_code": "INVALID_DATA", "error_description": "Os dados fornecidos no corpo da" + 
        " requisição são inválidos"});
    }
    
    
    const result = await computeRoute({origin, destination});
    return res.status(200).json(result);
}
    /*
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
    };*/
export { findAllRides };
    