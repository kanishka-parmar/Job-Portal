// imports
// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'


//config dotenv
dotenv.config()
//if .env in other folder we add in ({path:'./config'})
//object
const app=express()

//route
app.get('/',(req,res)=>{
   res.send("<h1>Welcome to job portal</h1>");
})

//port
const PORT =process.env.PORT || 8080
//listen
app.listen(8080,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} MODE on port ${PORT}`.bgCyan.white);
})