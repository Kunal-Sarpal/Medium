import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign,decode,verify } from 'hono/jwt';
import z from 'zod';
import { parseSigned } from "hono/utils/cookie";
import {signupInput, signinInput} from  "zodjicommon";

// sign

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    
    try{
        const success = signupInput.safeParse(body);
        if(!success){
            c.status(411)
            return c.json({
                message:"Invalid credentials"
            })
        }
        const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      });
    
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    
      return c.json({
        jwt: token
      })
  
    }catch(e){
      c.status(403)
      return c.json("Something went wrong");
    }
  
  
  
    // return c.text('kal ma gya ameereka');
  })
  
  // SIGN IN
  userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      //@ts-ignore  
      datasourceUrl: c.env.DATABASE_URL
  
    }).$extends(withAccelerate());
    try{
        const body = await c.req.json();
        const success = signinInput.safeParse(body);
        if(!success){
            c.status(411)
            return c.json({
                message:"Invalid credentials"
            })
        }
  
      const user = await prisma.user.findUnique({
        where:{
          email: body.email
        }
      })
      if(!user){
        c.status(403)
        return c.json({err: "User not found"})
      }
    
      const token = await sign({id:user.id}, c.env.JWT_SECRET)
      return c.json({jwt: token})
    }catch(e){
        return c.json("Invalid");
    }
   
  })