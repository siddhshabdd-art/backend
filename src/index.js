// require('dotenv').config({path: './.env'});

import dotenv from "dotenv";

import connectDB from "./database/index.js";

dotenv.config({ path: "./.env" });


connectDB()



/*(async () => {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URL} /${DB_NAME}`);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
        throw error;
    }
})()*/