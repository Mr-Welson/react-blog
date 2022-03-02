import { Breadcrumb } from "antd";
import Link from "next/link";
import Service from '../service';
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

const MyList = ({result}) => {
  return (
    <Layout pageTitle='笔记' Breadcrumb={BreadcrumbList}>
      <PostList postList={result.data}/>
    </Layout>
  )
}

MyList.getInitialProps = async (context) => {
  const id = context.query.id;
  const result = await Service.post.getArticleListByTypeId(id);
  return { result: result.data }
}


export default MyList
