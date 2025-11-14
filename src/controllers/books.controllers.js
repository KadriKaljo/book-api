import prisma from '../config/prisma.config.js';

export const getAllBooks = async (request, response) => {
    try {
      const { sort, sort_direction, take, page } = request.query;
      const pageSize = Number(take) > 0 ? Number(take) : 10;
      const pageNumber = Number(page) > 0 ? Number(page) : 1;
 
      const books = await prisma.book.findMany({
        orderBy: (sort && sort_direction) ? { [sort]: sort_direction } : undefined,
        skip: pageSize * (pageNumber - 1),
        take: pageSize
      });
      response.json({
        message: 'All books',
        data: books,
      });
    } catch (exception) {
      console.log(exception);
      response.status(500).json({
        message: 'Something went wrong',
        error: exception.message
      });
    }
  };
  export const getBookById = async (request, response) => {
    try {
      const id = Number(request.params?.id);
      const book = await prisma.book.findUnique({
        where: { id }
      });
      if (!book) {
        return response.status(404).json({ message: 'Book Not Found' });
      }
      response.status(200).json({
        message: 'Successfully Found Book',
        data: book
      });
    } catch (exception) {
      response.status(500).json({
        message: 'Something went wrong',
        error: exception.message
      });
    }
  };
  export const createBook = async (request, response) => {
    try {
      const { title, description, thumbnail_url, release_year } = request.body;
      const newBook = await prisma.book.create({
        data: { title, description, thumbnail_url, release_year }
      });
      response.status(201).json({
        message: 'Successfully Created Book',
        data: newBook
      });
    } catch (exception) {
      response.status(500).json({
        message: 'Something went wrong',
        error: exception.message
      });
    }
  };
  export const updateBook = async (request, response) => {
    try {
      const id = Number(request.params.id);
      const { title, description, thumbnail_url, release_year } = request.body;
      const updatedBook = await prisma.book.update({
        where: { id },
        data: {
          title,
          description,
          thumbnail_url,
          release_year
        }
      });
      response.status(200).json({
        message: 'Successfully Updated Book',
        data: updatedBook
      });
    } catch (exception) {
      response.status(500).json({
        message: 'Something went wrong',
        error: exception.message
      });
    }
  };
  export const deleteBook = async (request, response) => {
    try {
      const id = Number(request.params.id);
      await prisma.book.delete({
        where: { id }
      });
      response.status(200).json({
        message: 'Successfully Deleted Book'
      });
    } catch (exception) {
      response.status(500).json({
        message: 'Something went wrong',
        error: exception.message
      });
    }
  };
  