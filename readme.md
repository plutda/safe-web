
# Safe Web

使用pnpm workspace管理的monorepo, 项目依赖都放到了最外层

### 安装依赖

首先确保你已经安装了`pnpm`，[安装指南](https://pnpm.io/zh/installation)

安装项目所需的所有依赖：
```
pnpm install
```

### 启动server(port:4000)
```
pnpm run start:end
```

### 启动模拟xss(port:4030)
```
pnpm run start:xss
```

### 启动模拟csrf(两个端口：port:4010 和 port:4020)
```
pnpm run start:csrf
```

#### 并行执行命令在windows不生效

"node ./bank/index.js & node ./hack/index.js" 这种方式在windows平台无法正常执行, 使用`npm-run-all`来解决

```
"start:bank": "node ./bank/index.js",
"start:hack": "node ./hack/index.js",
"start": "run-p start:bank start:hack"
```
