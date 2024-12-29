import mongoose from "mongoose";

let initialized = false;

export const connect = async() => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log("Already connected to MongoDb!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'mundiane-blog',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("Successfully connected to MongoDB.")
        initialized = true;
    } catch (error) {
        console.log("Error connecting to MongoDD", error)
    }
}