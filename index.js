import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import cors from "cors";

//Routes
import connectDb from "./config/dbConnection.js";
import bookRoutes from "./routes/bookRoutes.js";

//APP config
dotenv.config();
connectDb();

const app = express();
app.use(express.json());
//1.allow all origins with default of cors(*)
app.use(cors(
  { origin: ['http://localhost:5173',
  'https://mern-bookstore-app.onrender.com']}
));
// //2. allow customs origins
// app.use(cors({ origin: "http://localhost:3000",
// methods: ["GET","POST","PUT","DELETE"],
// allowedHeaders: ["Content-Type","Authorization"] }));
const port = process.env.PORT || 5000;

//APP routing
app.get("/", (req, res) => {
  res.send("Running the server");
});
app.use("/books", bookRoutes);



//MONGO DB connection
const CONNECTION_URL = process.env.MONGO_URL;

mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("error connecting to mongodb", err));

//Listening to the server
app.listen(port, (req, res) => {
  console.log(`Server started on port ${port}`);
});
