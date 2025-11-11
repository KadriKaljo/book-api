import { Router } from 'express'; //nagu wifi router, selle sees on 404 sisse ehitatud,  kui vastust ei leia siis rakendub see
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/books.controllers.js';

const router = Router(); // lokaalne muutuja

router.get('/books', getAllBooks);           //kõikide raamatute toomine
router.get('/books/:id', getBookById)   //üksiku raamatu toomine, koolon tähendab dünaamilisust
router.post('/books', createBook);      //create
router.put('/books/:id', updateBook);      //muutmine
router.delete('/books/:id', deleteBook);

export default router; 