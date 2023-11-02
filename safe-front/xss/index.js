const Koa = require("koa")
const views = require("koa-views")
const path = require("path")
const Router = require("koa-router")
const router = new Router()

const app = new Koa()
app.use(views(path.join(__dirname, "./"), { extension:'html' }))

app.use(router.routes())

router.get("/", async(ctx) => {
  await ctx.render("index")
})

app.listen(4030,()=>{
  console.log("open server localhost:4030")
})
