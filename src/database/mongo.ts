import mongoose from "mongoose";
import { Database } from "./database";

class Mongo implements Database {
    private static instance: Mongo | null = null;
    private constructor() { };
    public static getInstance(): Mongo {
        if (!Mongo.instance) {
            Mongo.instance = new Mongo();
        }
        return Mongo.instance;
    }
    public connect(): void {
        mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@learning-app.ubaug.mongodb.net/`)
            .then(() => console.log('Connected!'))
            .catch((err) => {
				console.log('connect mongoDB fail');
			});
    }
    
}
const instanceMongooseDB = Mongo.getInstance();
export { instanceMongooseDB };

