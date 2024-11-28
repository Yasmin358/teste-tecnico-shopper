import { Request, Response } from 'express';
import { findAll } from '../services/ride.service';
import computeRoute from '../api/routesApi';

const findAllRides = async (req: Request, res: Response) => 
{
    const {customer_id, origin, destination } = req.body;
    console.log(req.body);
    console.log(destination);
    console.log(customer_id);
    if(!origin || !destination || !customer_id ) {
        return res.status(400).json({"error_code": "INVALID_DATA", "error_description": "Os dados fornecidos no corpo da" + 
        " requisição são inválidos"});
    } 
    
    const result = await computeRoute({origin, destination});
    if(result) {
    const { legs, distanceMeters, duration } = result.routes[0];
    const { endLocation, startLocation } = legs;
    const results = await findAll(distanceMeters);
    const resultFormat = {
        "origin": startLocation ,
        "destination": endLocation,
        "distance": distanceMeters, 
        "duration": duration,
        "options": results,
        "routeResponse": result,
        }
    return res.status(200).json(resultFormat);
    }
    
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