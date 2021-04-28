import express from "express";
import dotenv from "dotenv";
import router from "./routes/APICalls";

dotenv.config({ path: "./.env.local" });
const app = express();
const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;

app.use("/", router);

app.listen(port, () =>
	console.log(`App running in ${environment} mode on http://localhost:${port}`)
);
