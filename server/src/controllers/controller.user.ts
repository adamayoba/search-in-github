require('dotenv').config()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextFunction, Request, Response } from 'express'
import axios from 'axios';
import { btoa } from 'buffer'



export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany()
    res.json(users)
}


export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    const result = await prisma.user.create({
        data: { ...req.body },
      })
      res.json(result)
}


export const getUserGithub = async (req: Request, res: Response, next: NextFunction) => {
  
  const { login } = req.params

  const login_user  = String(login)
  
  const user = await prisma.user.findUnique({
    where: { login: String(login_user) },
    })

  if( user!= null) {
    console.log(user); 
    res.json(user)
  }

  else{
    const credits_client = btoa(process.env.USERNAME_GITHUB+':'+process.env.PERSONAL_ACCESS_TOKEN)
    try {
      const response = await axios.get(`https://api.github.com/users/${login_user}`, { 
      headers: {
      'Authorization': `Basic ${credits_client}`
      }})
      // console.log(response); 
      const userFromGithub = await prisma.user.create({
      data: { 
      ...req.body
      },
    })
    res.json(userFromGithub)
    } catch (error) {
      res.status(404).json({message: "Request failed with status code 404", "status": 404});
    } 
  }  
}