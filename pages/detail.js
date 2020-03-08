import { Breadcrumb, Icon, Affix } from "antd";
import Markdown from "react-markdown";
import MarkdownNavbar from "markdown-navbar";
import Link from "next/link";

import Layout from '../components/Layout';
import Box from '../components/Box';

import styles from '../styles/post.module.css';
import markdownStyle from '../styles/markdown.module.css'
import axios from "axios";
import dayjs from 'dayjs';

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

const Detail = ({ result }) => {
  const item = result.data[0];
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
              source={item.content}
              headingTopOffset={0} // 锚点距离顶部的距离
              ordered={false} // 是否显示序号
            />
          </Box>
        </Affix>
      }
    >
      <Title item={item} />
      <Markdown
        source={item.content}
        escapeHtml={false}
      />
    </Layout>
  )
}

Detail.getInitialProps = async (context) => {
  const id = context.query.id;
  const result = await axios('http://localhost:7001/default/getArticleById/' + id);
  return { result: result.data }
}

export default Detail
