import "reflect-metadata"
import express,{Request,Response,NextFunction, Router} from "express"
import logger from "./config/logger"
import createHttpError, { HttpError } from "http-errors"
import authRouter from "./routes/auth"

 const app= express()

 app.get("/", async (req,res,next)=>{
 const err= createHttpError(401, "u cannot do this")
   

    next(err)
    
 })

app.use("/auth", authRouter)


 app.use((err:HttpError,req:Request,res:Response,next:NextFunction)=>{
    logger.error(err.message)
    const statuscode= err.statusCode

    res.status(statuscode).json({
        errors:[
            {statuscode,
                type:err.name,
                msg:err.message,
                path:"",
                location: "",
            }
        ]
    })
 })
export default app 