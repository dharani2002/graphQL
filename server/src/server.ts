import express from "express";
import cors from 'cors';
import { createHandler } from "graphql-http";
import "dotenv/config";
import app from "./app";



const main=async()=>{
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });  
}
main().catch(err=>{
    console.error(err)
})


