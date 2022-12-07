import express,{Request,Response} from "express";
import { DataSource, Entity} from "typeorm";
import {table} from "./entity/table"
import { router } from "./router/route";

const app = express()
app.use(express.json())
const port =4500;


app.use("/", (req:express.Request, res:express.Response, next) => {
  const auth :any= req.headers.authorization;
  const credentials = Buffer.from(auth.split(" ")[1], "base64")
      .toString("ascii")
      .split(":");

  if (credentials[0] === "super" && credentials[1] === "super") {
      next();
  } else {
      res.status(401).send({ "Message": "Uauthorized user" });
  }
})



app.use("/", router);

const AppDataSource=new DataSource({
    type:"mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "Anjana@123",
   database: "task6",
   synchronize: true,
   entities: [table]
 
})
AppDataSource.initialize()
   .then(() => {
     console.log("DB connection established");
   })

   app.listen(port,():void=>{
    console.log("Server listening on port:" + port);
    }
    )

    
export{
    AppDataSource
}


    