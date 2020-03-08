import Layout from '../components/Layout';
import PostList from "../components/PostList";
import axios from 'axios';
const Home = ({ result }) => {
  console.log(result);
  return (
    <Layout pageTitle='首页'>
      <PostList postList={result.data} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const result = await axios('http://localhost:7001/default/getArticleList');
  return { result: result.data }
}

export default Home
