import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();


const port = process.env.PORT || 3000;
import compression from 'compression';
import morgan from 'morgan';
import { instanceMongooseDB } from './database/mongo';
const { PORT } = process.env;

const app: Express = express();
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

app.listen(PORT, () => {
    console.log(`\x1b[35m Server eCommerce is running with port: \x1b[34m${PORT}`);
});

//init db
instanceMongooseDB.connect();

export { app };
