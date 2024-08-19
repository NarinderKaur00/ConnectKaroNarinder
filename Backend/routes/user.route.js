import express from "express";
import { editProfile, followOrUnfollow, getProfile, getSuggestedUsers, login, logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router(); //i got router

router.route('/register').post(register); // yaha pr api ko batani hoti h kya kya chalega
router.route('/login').post(login); 
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile); // make sure ki vo authenticate ho, this will call the function to check from middleware isauthenticate then we get profile
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile); //we use multer for backend
router.route('/suggested').get(isAuthenticated, getSuggestedUsers);
router.route('/followorunfollow/:id').post(isAuthenticated, followOrUnfollow);

//all routes are set
export default router;