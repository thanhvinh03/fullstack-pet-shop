import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
//For env File 
dotenv.config();

const app: Application = express();
// app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server 222');
});

app.get('/api/v1', (req: Request, res: Response) => {
  res.send({name: 'xiu'});
});

app.get('/api/v1/products', (req: Request, res: Response) => {
  const products = [
    {name: 'xiu'},
    {name: 'thanhvinh'},

  ]
  res.json(products)
});

app.get('/api/v1/app', (req:any, res:any) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Server is Fire at https://localhost:${port}`);
});
