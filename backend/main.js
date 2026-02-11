import express from "express"
import dotenv from "dotenv"
import aiRouter from "./routes/ai.js";

dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT

//routes
app.use("/generate", aiRouter);

app.get('/', (req, res) => {
  res.send({"message":'Hello World!'})
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
