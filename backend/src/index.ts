import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server 222');
});

app.get('/api/v1', (req: Request, res: Response) => {
  res.send({name: 'xiu'});
});

app.listen(port, () => {
  console.log(`Server is Fire at https://localhost:${port}`);
});