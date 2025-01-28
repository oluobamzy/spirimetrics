import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import config from "./auth_config.js";
dotenv.config();


const connectDB = async () => {
  console.log('Connecting to MongoDB...');
  // console.log(process.env.mongodb_uri);
  try {
    const conn = await mongoose.connect(`${process.env.mongodb_uri}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
