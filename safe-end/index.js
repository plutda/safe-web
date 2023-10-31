const Koa = require("koa")
const router = require("./router")
const serve = require("koa-static")
const views = require("koa-views")
const cors = require('@koa/cors')

const app = new Koa()

app.use(cors())
app.use(serve(__dirname+"/static"))
app.use(views(__dirname+"/views",{
    extension: "pug"
}))

app.use(router.routes())


app.listen(4000,()=>{
    console.log("open server localhost:4000")
})
