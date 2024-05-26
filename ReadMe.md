# 项目说明

### 前端配置说明

前端框架使用 `nodejs-v20.13.1` ，

在中国大陆地区使用可以更换镜像源

```
npm config set registry https://registry.npmmirror.com
```

使用标准 `next` 脚手架

```
npx create-next-app@latest
```

使用如下配置进行初始配置

```bash
create-next-app@14.2.3
Ok to proceed? (y) y
√ What is your project named? ... my-app
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
```

组件库使用 `material-v5.15.18` 作为基础，配合 `Tailwind` 。

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
```

使用`axios` 作为前端请求包

```
npm install axios
```



## 后端

### 后端配置说明

后端 API 服务使用 fastapi

