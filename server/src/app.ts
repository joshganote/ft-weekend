import express, { Application, Request, Response } from 'express';

const app: Application = express();
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000",
}))

app.get('/', (req: Request, res: Response) => {
  res.send({ name: "josh"});
});

app.listen(5000, () => console.log('Server Running'));
