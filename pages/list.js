import { Breadcrumb } from "antd";
import Link from "next/link";
import Layout from '../components/Layout';
import PostList from "../components/PostList";

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

const MyList = () => {
  return (
    <Layout pageTitle='笔记' Breadcrumb={BreadcrumbList}>
      <PostList />
    </Layout>
  )
}

export default MyList
