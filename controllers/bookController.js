import Book from "../models/bookModel.js";


//Create a book
export const createbook =  async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({ message: "Please enter all the fields" });
      }
  
      const newbook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newbook);
      res.status(201).send(book);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  };
  
  //Get all books
  export const getbooks =  async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).send({
        count: books.length,
        data: books,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  };
  
  //Get a book by id
  
export const getbook = async (req,res)=>{
      try{
        const book = await Book.findById(req.params.id);
        if(!book){
          return res.status(404).send({message:"Book not found"});
        }
        else{
          res.status(200).send(book);
        }
  
      }
      catch(err){
        console.log(err.message);
        res.status(500).send({ message: err.message });
      }
};
  
//Update a book

export const updatebook = async (req,res)=>{
    try{
    if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({message:"all the fields are required"});
    }

    const {id} = req.params;

    const result = await Book.findByIdAndUpdate(id,req.body);

    if(!result){
        return res.status(404).send({message:"Book not found"});
    }
    else{
        res.status(200).send({message:"Book updated"});
    }
    }
    catch(err){
    console.log(err.message);
    res.status(500).send({ message: err.message });
    }
};

//Delete a book

export const deletebook = async (req,res)=>{
try{
    const book = await Book.findByIdAndDelete(req.params.id);
    if(!book){
    return res.status(404).send({message:"Book not found"});
    }
    else{
    res.status(200).send({message:"Book deleted"});
    }
}
catch(err){
    console.log(err.message);
    res.status(500).send({ message: err.message });
}
};
