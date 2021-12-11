import { getUsers, getUserGithub, addUser } from './../controllers/controller.user';
import { Router } from 'express';

export const user = Router()

// CREATE USER
user.post('/adduser', addUser)

// GET USER BY USERNAME => THE MAIN OF MECANISME OF API
user.get('/getuser/:login', getUserGithub)

// GET ALL USERS REGISTERED IN THE DATABASE
user.get('/getusers', getUsers)



export default user; 