import { Router } from 'express'; //nagu wifi router, selle sees on 404 sisse ehitatud,  kui vastust ei leia siis rakendub see
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authors.controllers.js';
import { validate } from '../middlewares/validator.middleware.js';
import { authorSchema } from '../validations/author.validation.js';

const router = Router(); // lokaalne muutuja

router.get('/authors', getAllAuthors);           //kõikide raamatute toomine
// https://raamatupood.ee/api/v1/books/(:id) => 838383 kontrollime kas sellle id-ga raamat on olemas. Endpoint URL


router.get('/authors', getAllAuthors);
router.get('/authors/:id', getAuthorById);
router.post('/authors', validate(authorSchema), createAuthor);
router.put('/authors/:id', validate(authorSchema), updateAuthor);
router.delete('/authors/:id', deleteAuthor);

export default router; 