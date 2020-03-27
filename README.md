### 本项目是在vue-element-admin  template 模板上进行修改的
更改内容:
 1. 登录,菜单,权限,项目运行重复启动浏览器,f12调试等问题
 2. src/layout/components/Sidebar/index.vue   
 3. 启动是浏览器打开2个(config.js dev环境中open关闭  package.json  "dev": "vue-cli-service serve  --open",)
 
# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9528

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```
