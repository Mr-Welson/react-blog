import { message } from 'antd';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import Service from '../service/index';

const Home = ({ result }) => {
  if (result && result.code !== 200) {
    message.error(result.message);
  }

  return (
    <Layout pageTitle='首页'>
      <PostList postList={result.data} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  try {
    const result = await Service.post.getArticleList();
    return { result: result.data };
  } catch (error) {
    return { result: { data: [], error } };
  }
};

export default Home;
