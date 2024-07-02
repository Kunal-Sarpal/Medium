import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import {createBlogInput, updateBlogInput} from "zodjicommon"


export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>()
blogRoute.use("/*", async (c, next) => {
    const header = c.req.header("authorization") || "";

    // const token = header.split(' ')[1];
    try {
        const response = await verify(header, c.env.JWT_SECRET);
        if (response.id) {
            // @ts-ignore
            c.set("userId", response.id);
            await next();
        }
        else {
            c.status(403)
            return c.json({ err: "unauthorized" });
        }
    }
    catch (e) {
        c.status(403)
            return c.json({ err: "unauthorized" });
    }
})



blogRoute.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const success = createBlogInput.safeParse(body);
        if(!success){
            c.status(411)
            return c.json({
                message:"Invalid credentials"
            })
        }
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog.id,
        })

    }catch (err) {
        return c.json("Something went wrong");
    }
})
blogRoute.put('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const success = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message:"Invalid credentials"
        })
    }
    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id,
    })
})

blogRoute.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.post.findMany();
    return c.json({
        blog
    })
})

blogRoute.get('/:id', async (c) => {
    const blogid = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: Number(blogid)
            }
        })

        return c.json({
            blog
        })
    } catch (e) {
        c.status(404)
        return c.json({ message: "Error fetchin blog post" });
    }
})

