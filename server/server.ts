import app from './app';
import 'dotenv/config';

const port = process.env.APP_PORT || 8080;

app.listen(port) 
console.log(`Server is running on port ${port}`);
