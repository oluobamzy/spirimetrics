import express from 'express';
import requireAuth from '../configs/requireAuth.js';
import profileController from '../controllers/profileController.js';
const router = express.Router();

router.get('/id', requireAuth, profileController.getProfile);
export default router;