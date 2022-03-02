# react-blog
学习技术胖的视频构建博客，记录在学习过程中的坑和笔记

博客前端篇
[博客服务端](https://github.com/Mr-Welson/react-blog-service)

## 项目运行

**启动开发环境**

```
npm run dev
```

**打包**

```
npm run build
```

**本地预览**

预览前需确保根目录下有已经打包好的文件，如果没有，需先执行 `build` 命令

```
npm run start
```

## Next笔记
可参考根目录下 Next.md, 遇到新内容会不定时更新

## 博客思路(更新中)

1. 脚手架搭建博客基本框架(create-next-app)
2. 静态数据完所有成页面布局(Antd)
3. 完成详情页 Markdown 解析及锚点(marked、highlight.js)
4. 安装后台环境(phpstudy、mysql)
5. 编写后台路由配置(egg.js)
6. 前后端测试(getInitialProps、axios)
7. 前端提取服务层(Service文件夹)
8. 前端功能完善
 - 分类导航使用动态数据
 - 根据文章类别获取文章列表
 - 所有页面支持 markdown 格式


## 坑集

1. antd 样式按需引入报错
2. antd v4.x 不再提供 Icon 组件，需要单独下载 Icon 库
3. 由于是服务端渲染，很多报错信息并不能很好的找出问题，个人在开发初期经常花费较多时间排查bug，最后却发现是因为最常见的字段或类型报错等原因，因此建议小伙伴们遇到代码语法确认没问题的时候，可以检查下是否存在字段容错等问题

## 不同点

1. 我使用的 Next 版本较高，已经支持了 CSS 的引入,(视频版本需要下载 css 插件), 故样式文件不太一样
2. 页面组件拆分更细
3. 前端单独抽离 Service 层, 使 API 更易于维护  
