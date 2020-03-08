import { Breadcrumb } from "antd";
import Link from "next/link";
import Layout from '../components/Layout';
import PostList from "../components/PostList";
import axios from 'axios';

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

const MyList = ({result}) => {
  return (
    <Layout pageTitle='笔记' Breadcrumb={BreadcrumbList}>
      <PostList postList={result.data}/>
    </Layout>
  )
}

MyList.getInitialProps = async () => {
  const result = await axios('http://localhost:7001/default/getArticleList');
  return { result: result.data }
}


export default MyList
