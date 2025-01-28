import express from 'express';
import imagesControllers from '../controllers/imagesControllers.js';

const router = express.Router();  //create a router object
router.get('/', imagesControllers.getImage); //create a get route for images
router.post('/', imagesControllers.postImage); //create a post route for images

export default router;