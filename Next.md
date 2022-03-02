# Note-Next.js

[Next.js](https://nextjs.org/)  是一个轻量级的 React 服务端渲染应用框架。

Tip: 使用 TypeScript 语言编写的

仅支持 React 16 以上

支持 `.js`,  `.jsx`,  `.ts`,  or  `.tsx ` 格式开发

本文根据官方文档意译

## 预编译

### Static Generation

亦称为：静态网站

适用于：

- 静态活动页
- 静态博客
- 指示板

#### swr 插件

页面不需要使用 getInitialProps 

页面先加载，加载完成后再去执行异步请求，然后刷新。

### Server-side rendering

适用于：

- 数据经常更新
- 支持 CMS 的页面

使用 getInitialProps ，页面会等待请求完成后在渲染。

## 配置

### 自定义配置

```
npm install next react react-dom
```

### 使用脚手架

**create-next-app** 

安装

```
npm i create-next-app -g
```

新建项目

```
npm init next-app filename
# or 
yarn create next-app filename
```

### 命令行

开发

```
next dev
// 指定端口
next dev -- -p [port]
```

打包

```
next build
```

运行生产服务

```
next start
```

## 目录说明

### api 文件夹

路由文件夹，在 pages 下的 api 文件夹内的一个文件就是一个 API Route

### pages

页面存放目录，自动生成路由，文件夹名称即为路由名称，同时也支持动态路由和嵌套路由

- `pages/index.js` → `/`
- `pages/blog/index.js` → `/blog`

#### **动态路由：**

使用 ` []` 代表动态参数

- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)

#### 嵌套路由

嵌套文件夹

- `pages/blog/first-post.js` → `/blog/first-post`
- `pages/dashboard/settings/username.js` → `/dashboard/settings/username`

#### _app.js

 页面初始化前的拦截操作可以放在 _app.js 中，所有页面的渲染都会先执行这里的代码。

**场景：**

- 注入额外的参数

- 错误捕获 ` componentDidCatch `
- 添加全局 CSS

**示例：**

```
// 只能在这里引入全局样式
import './button.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  console.log(Component);
  console.log(pageProps);
  return <Component {...pageProps} />
}
```

**参数说明：**

Component：将要跳转的页面

pageProps： 页面的参数，如果页面内部没有使用  `getInitialProps` ，则是一个空对象。

### public

静态资源目录

public 下的文件名不可和 pages 下的文件名重复，会导致错误

## 组件

### Head

### Link（路由跳转）

1. 路由跳转，局部刷新，`<a> ` 标签会引起整个页面刷新

2. Link 标签不接受 href 以外的参数

3. Link 只接受一个顶层子组件

4. query 参数

   ```
   // 传参
   <Link href='/post?title=title'>
   
   // 接收参数: router.query.title
   import { useRouter } from 'next/router';
   function post() {
   	const router = useRouter();
       return (<div>{ router.query.title }</div>)
   }
   ```

## 基本特性

### 路由及参数

` useRouter ` or ` withRouter `

### 地址栏 URL 

### 数据请求：getInitialProps

` getInitialProps ` 只能添加给默认导出的组件，加给其他组件是不生效的

### styled-jsx 

局部样式对子组件不生效

### API Routes

### CSS Support

#### 全局 CSS： filename.css

​	全局样式只能在 ` pages/_app.js `  中引入 

#### 内部 CSS： filename.module.css

组件内部  css 文件中，必须使用 class 或 id 选择器，直接使用 标签选择器 写样式会导致错误。

使用时不可直接使用字符串 ` class ` 或 ` id `  ，需要使用形如 `  className={styles.button}` 格式。

内部样式优先级高于全局样式

**示例：**

button.module.css ：

```
.button {
  width: 80px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  outline: none;
  border: 1px solid saddlebrown;
  background: transparent;
  color: saddlebrown;
}
.button:hover {
  opacity: 0.8;
}

/* 以下代码会导致错误,必须使用 class 或 id书写样式 */
/*
    div {
        font-size: 12px
    }
*/


```

button.js ：

```
import styles from './button.module.css'

const Button = () => {
  return <button className={styles.button}>按钮</button>
}

export default Button;
```

#### CSS-in-JS

和 React 现有用法一致，支持用`.css`, `.scss`, `.less` or `.styl`，需要配置默认文件 next.config.js，具体可查看下面链接

- [@zeit/next-css](https://github.com/zeit/next.js/tree/canary/examples/basic-css)
- [@zeit/next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)
- [@zeit/next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
- [@zeit/next-stylus](https://github.com/zeit/next-plugins/tree/master/packages/next-stylus)

### TypeScript

根目录下创建一个空文件 ` tsconfig.json ` ，然后执行 ` next ` (一般为 ` npm run  dev `) ，系统检测到 ` tsconfig.json ` 文件时会自动判断是否已安装相关依赖，然后根据错误提示完成依赖安装，安装完成即可使用 TS 开发。

再次执行 ` npm run dev ` 会在 ` tsconfig.json ` 中自动写入默认配置。也可以手动修改配置。

