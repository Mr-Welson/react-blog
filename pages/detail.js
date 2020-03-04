import { Breadcrumb, Icon, Affix } from "antd";
import Markdown from "react-markdown";
import MarkdownNavbar from "markdown-navbar";
import Link from "next/link";

import Layout from '../components/Layout';
import Box from '../components/Box';

import styles from '../styles/post.module.css';
import markdownStyle from '../styles/markdown.module.css'

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
  return (
    <>
      <div className={styles.title}>
        React-Blog 开发
      </div>
      <div className={styles.desc} style={{ textAlign: 'center' }}>
        <span><Icon type='calender' />{item.date}</span>
        <span><Icon type='folder' />{item.classify}</span>
        <span><Icon type='fire' />{item.count}</span>
      </div>
    </>
  )
}

const markdown = (
  '\n' +
  '# p01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '\`console.log(111)\` \n\n' +
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```'
)

const Detail = () => {
  return (
    <Layout
      pageTitle='详情'
      Breadcrumb={BreadcrumbList}
      asideChildren={
        <Affix offsetTop={5}>
          <Box className={markdownStyle.navBox}>
            <div className={markdownStyle.navTitle}>文章目录</div>
            <MarkdownNavbar
              className={markdownStyle.navbar}
              source={markdown}
              headingTopOffset={0} // 锚点距离顶部的距离
              ordered={false} // 是否显示序号
            />
          </Box>
        </Affix>
      }
    >
      <Title />
      <Markdown
        source={markdown}
        escapeHtml={false}

      />
    </Layout>
  )
}

export default Detail
