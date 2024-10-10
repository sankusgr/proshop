import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js';

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
