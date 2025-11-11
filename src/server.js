import express from "express";
import bookRoutes from './routes/book.routes.js';   

const app = express();
const PORT = 3000;

app.get("/welcome", (request, response) => {
  response.send("Welcome to the server!");
});

app.use(bookRoutes);     //app.use on middleware kasutamiseks, ütleme et kasuta siit failist midagi. 


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
