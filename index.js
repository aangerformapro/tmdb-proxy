
import express from "express";
import cors from "cors";

import env from "./src/utils/env.js";
import { rateLimit } from "express-rate-limit";
import routes from "./src/routes/index.js";



const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests made from this IP, please try again after 15 minutes",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.all("*", (request, response, next) =>
{
    return response.status(404).json({ message: "Endpoint not found!" });
});


app.listen(env.port, () =>
{
    console.log(`Server is up and running at http://localhost:${env.port}`);
});