const Koa = require("koa")
const router = require("./router")
const serve = require("koa-static")
const views = require("koa-views")
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')

const app = new Koa()

// axios请求默认不携带cookie,设置withCredentials:true则会自动携带,需要在服务端设置Access-Control-Allow-Credentials头部
app.use(cors({ credentials: true }))
app.use(bodyParser())
app.use(serve(__dirname+"/static"))
app.use(views(__dirname+"/views",{
    extension: "pug"
}))

app.use(router.routes())

app.keys = ['some secret hurr']

const CONFIG = {
  key: 'koa.sess',
  maxAge: 60000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
  secure: false,
  sameSite: null
}

app.use(session(CONFIG, app))

app.listen(4000,()=>{
    console.log("open server localhost:4000")
})
