import { Router } from 'express'; //nagu wifi router, selle sees on 404 sisse ehitatud,  kui vastust ei leia siis rakendub see
import { validate } from '../middlewares/validator.middleware.js';
import bookSchema from '../validations/book.validation.js';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/books.controllers.js';

const router = Router(); // lokaalne muutuja

router.get('/books', getAllBooks);           //kõikide raamatute toomine
// https://raamatupood.ee/api/v1/books/(:id) => 838383 kontrollime kas sellle id-ga raamat on olemas. Endpoint URL

router.get('/books/:id', getBookById)   //üksiku raamatu toomine, koolon tähendab dünaamilisust, sinna paneb klient numbri 
// router.get('/books/:id/authors/:authirId);

router.post('/books', createBook);      //create
router.put('/books/:id', updateBook);      //muutmine
router.delete('/books/:id', deleteBook); //vajab dünaamilist id-d (:id)

export default router; 