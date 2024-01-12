import express from "express";

const router = express.Router();

import{getbooks,getbook,createbook,updatebook,deletebook} from "../controllers/bookController.js";

//Get all books
router.get("/", getbooks);

//Get a book by id
router.get("/:id", getbook);

//Create a book
router.post("/",createbook);

//update a book
router.put("/:id",updatebook);

//delete a book 
router.delete("/:id",deletebook);

export default router;