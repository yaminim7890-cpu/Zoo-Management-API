import express from "express";
import zooRoutes from "./routes/zooRoutes.js";

const app = express();
const port = 2000;

app.use("/", zooRoutes);

app.listen(port, () => {
    console.log(`server running succesfully on port ${port}`);
})
