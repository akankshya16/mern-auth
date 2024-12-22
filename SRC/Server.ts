import {Config} from "./config";
import app from "./app"


const port= Config.PORT
console.log(port)


const start= ()=>
  {
    try{
      app.listen(port, ()=>{
        console.log("started")})
    }catch(err)
    
    {
       console.error(err)
       process.exit(1)
    }
  }
       

start()