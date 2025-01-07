import express, { Express } from "express";
import dotenv from "dotenv";
import routers from "./routers"
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
    console.log(`\x1b[35m Server is running with port: \x1b[34m${PORT}`);
});

//init db
instanceMongooseDB.connect();

// init routers
app.use('', routers);

export { app };
