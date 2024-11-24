import axios from 'axios';

const submitRide = (ride: object) => {
    const result = axios.post(`http://localhost:8080/ride/estimate/`, ride)
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        return true;
    })
    .catch((error) => {
        console.log(error.response);
        return false;
    })
    
    return result;   
}

export { submitRide };   