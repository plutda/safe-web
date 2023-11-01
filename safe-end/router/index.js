const router = require('./router')
const fs = require("fs")
const path = require("path")

function resolve(p) {
  return path.resolve(__dirname, p)
}

router.get("/", (ctx) => {
  ctx.body = "hello"
})

router.get("/inner-script",(ctx)=>{
  const content = fs.readFileSync(resolve("../views/test1.html"))
  ctx.set("Content-Type", "text/html")
  ctx.body = content
})

router.post("/reg-replace", (ctx) => {
  const body = ctx.request.body
  const input = body.value.replace(/script/ig, '')
  ctx.body = '<h1>' + input + '</h1>'
})

router.get("/transfer_cookie", (ctx) => {
  const params = ctx.request.query
  console.log('cookie:', params)
})

module.exports = router