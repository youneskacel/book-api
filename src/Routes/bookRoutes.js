import express from 'express'
import {
    addNewBook,
    getAllBooks
} from '../controllers/bookController.js'

const bookRouter = new express.Router()

bookRouter.post('/book',addNewBook)

bookRouter.get('/books',getAllBooks)




export default bookRouter



