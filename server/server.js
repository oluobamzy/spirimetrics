import express from 'express';
import db from './configs/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import { auth } from 'express-openid-connect';
import config from './configs/auth_config.js';
import imagesRoutea from './routes/imagesRoutes.js';
import youtubeRoutes from './routes/youtubeRoutes.js';



const PORT = process.env.PORT || 3000;
//create express app
const app = express();

//middleware to parse JSON data
// app.use(bodyParser.json());
app.use(express.json());
app.use(auth(config));

app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Enable cookies if needed
  }));
//import api routes
app.use('/auth', authRoutes);
app.use("/upload-image",imagesRoutea);
app.use("/youtube",youtubeRoutes);


//connect to database
db().then((result) => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
        console.log(error);
    });


app.get('/api', (req, res) => {
    res.send('Welcome to the spirimetrics API');
});