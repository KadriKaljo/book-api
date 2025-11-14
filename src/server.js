import express from "express";                          // liigub ülevalt alla 
import bookRoutes from './routes/book.routes.js';   
import authorRoutes from './routes/author.routes.js'; 

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/welcome", (request, response) => {
  response.send("Welcome to the server!");
});

app.use('/api/v1', bookRoutes);     //app.use on middleware kasutamiseks, ütleme et kasuta siit failist midagi. 
                                  // prefix on see app/v1
app.use('/api/v1', authorRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
