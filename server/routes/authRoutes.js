import express from 'express';
import authControllers from "../controllers/authControllers.js"
import cookieParser from 'cookie-parser';
// import { requiresAuth } from 'express-openid-connect';
// import config from '../configs/config.js';
const router = express.Router();  //create a router object
router.use(cookieParser()); //use the cookie parser middleware
// router.use(auth(config)); //use the auth middleware



// router.get('/signup',(authControllers.signUpGet) )
// router.get('/login',(authControllers.loginGet))

router.post('/signup',(authControllers.signUpPost))
router.post('/login',(authControllers.loginPost))
router.post('/logout',(authControllers.logoutPost))
// router.get('/profile', requiresAuth(), authControllers.profileGet);
export default router;