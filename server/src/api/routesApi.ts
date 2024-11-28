import 'dotenv/config';


const computeRoute =  async (route: {origin: string, destination: string}) => {
    const googleApi = process.env.GOOGLE_API_KEY;
    const {origin, destination} = route;
    const request = await fetch(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${googleApi}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Goog-FieldMask': 'routes.legs.startLocation.latLng,routes.legs.endLocation.latLng,routes.duration,routes.distanceMeters,',
        },
        body: JSON.stringify({
            "origin": {
              "address": origin
            },
            "destination": {
              "address": destination
            },
            "travelMode": "DRIVE"
        })
    })
    const requestJson = await request.json();
    return requestJson;
};

export default computeRoute;