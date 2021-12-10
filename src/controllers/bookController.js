import Book from '../Models/book.js'


const getAllBooks = async (req,res) => {
    try{
        console.log("all books requested")
        const books = await Book.find()
        res.status(200).json({
            message: "Books Found",
            data : books
        })
    }catch(err){
        res.status(500).json({
            message: "Internal server error",
            error: err
        })
    }
}

const addNewBook = async (req,res) => {
    try{
        const book = new Book(req.body)
        console.log(req.body)
        await book.save()
        res.status(200).json({
            message: "Books added",
            data : book
        })
    }catch(err){
        res.status(500).json({
            message: "Internal server error",
            error: err
        })
    }
}



export {
    addNewBook,
    getAllBooks
}