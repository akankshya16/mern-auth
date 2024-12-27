import {Config} from "./config";
import app from "./app"
import { loggers } from "winston";
import logger from "./config/logger";


const port= Config.PORT
console.log(port)


const start= ()=>
  {
    try{
      app.listen(port, ()=>{
       logger.info("sever listening on the  port")})
    }catch(err)
    
    {
       console.error(err)
       process.exit(1)
    }
  }
       

start()