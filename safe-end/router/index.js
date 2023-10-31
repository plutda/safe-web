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
  console.log(111, ctx.req.body)
  // input = input.replace(/script/ig, '')
  // ctx.body = '<h1>' + input + '</h1>'
})

module.exports = router