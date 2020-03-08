import Layout from '../components/Layout';
import PostList from "../components/PostList";
import Service from '../service/index';

const Home = ({ result }) => {
  return (
    <Layout pageTitle='首页'>
      <PostList postList={result.data} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const result = await Service.post.getArticleList();
  return { result: result.data }
}

export default Home
