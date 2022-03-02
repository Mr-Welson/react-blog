import Link from "next/link";
import { Breadcrumb, Icon, Affix } from "antd";
import Marked from "marked";
import hljs from "highlight.js";
import dayjs from 'dayjs';

import styles from '../styles/post.module.css';
import markdownStyle from '../styles/markdown.module.css'

import Service from '../service';
import Layout from '../components/Layout';
import Box from '../components/Box';
import Tocify from '../components/Tocify/index.tsx';

const BreadcrumbList = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link href='/'><a>首页</a></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a>笔记</a>
    </Breadcrumb.Item>
  </Breadcrumb>
)

const Title = ({ item = {} }) => {
  const createTime = dayjs(+item.createTime).format('YYYY/MM/DD HH:mm:ss')
  return (
    <>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.desc} style={{ textAlign: 'center' }}>
        <span><Icon type='calender' />{createTime}</span>
        <span><Icon type='folder' />{item.typeName}</span>
        <span><Icon type='fire' />{item.viewCount}</span>
      </div>
    </>
  )
}

const tocify = new Tocify();
const renderer = new Marked.Renderer();
renderer.heading = (text, level) => {
  const anchor = tocify.add(text, level);
  return `<a id="${anchor}" href="#${anchor}"><h${level}>${text}</h${level}></a>`
}

Marked.setOptions({
  renderer,
  gfm: true, // 使用 github 样式 
  pedantic: false, // markdown 容错处理
  sanitize: false, // 不渲染markdown中的 html 标签
  tables: true,
  breaks: false,
  smartLists: true, // 自动渲染列表
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

const Detail = ({ result }) => {
  const item = result.data[0];
  const content = Marked(item.content || '');
  return (
    <Layout
      pageTitle='详情'
      Breadcrumb={BreadcrumbList}
      asideChildren={
        <Affix offsetTop={5}>
          <Box className={markdownStyle.navBox}>
            <div className={markdownStyle.navTitle}>文章目录</div>
            {tocify && tocify.render()}
          </Box>
        </Affix>
      }
    >
      <Title item={item} />
      <Box>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Layout>
  )
}

Detail.getInitialProps = async (context) => {
  const id = context.query.id;
  const result = await Service.post.getArticleById(id);
  return { result: result.data }
}

export default Detail
