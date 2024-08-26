import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
const app = express()
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.DB!).then(() => {
    console.log(`Database connected to: ${process.env.DB}`);
}).catch((err:Error) =>{
    console.log(err);
});
app.get('/', function (req: express.Request, res: express.Response) {
    res.json({ massage: 'hello world'});
});


app.listen(process.env.PORT);