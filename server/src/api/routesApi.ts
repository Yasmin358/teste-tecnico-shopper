import 'dotenv/config';


const computeRoute =  async (route: {origin: string, destination: string}) => {
    const googleApi = process.env.GOOGLE_API_KEY;
    const {origin, destination} = route;
    const request = await fetch(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${googleApi}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "origin": {
              origin
            },
            "destination": {
              destination
            },
            "travelMode": "DRIVE"
        })
    })
    const requestJson = await request.json();
    console.log(requestJson);
    return requestJson.results;
};

export default computeRoute;