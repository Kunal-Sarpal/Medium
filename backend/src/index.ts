import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';


import { userRouter } from './routes/user';
import { blogRoute } from './routes/blog';
import { cors } from 'hono/cors'


// const app = new Hono()
// c  -> context -> req and res and all env whatever you want to excess


// rember this 
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>

app.use('/api/*', cors())
// Routes
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRoute)



// MIDDLEWARE 


// Index Page
app.get("/", (c)=>{
  return c.json("Hello world")
})
// SIGN UP









export default app
