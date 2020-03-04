import { List, Icon } from "antd";
import post from '../../styles/post.module.css';

const postList = Array.from({ length: 20 }).map((v, k) => ({
  id: Math.random(),
  title: `笔记-${k}`,
  date: '2020/03/03 22:00',
  classify: '前端',
  count: Math.floor(Math.random() * 100 + 10),
  content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
}))


const PostList = () => {
  return (
    <List
      header={<div>最新日志</div>}
      itemLayout='vertical'
      dataSource={postList}
      renderItem={item => (
        <List.Item key={item.id}>
          <div className={post.title}>{item.title}</div>
          <div className={post.desc}>
            <span><Icon type='calender' />{item.date}</span>
            <span><Icon type='folder' />{item.classify}</span>
            <span><Icon type='fire' />{item.count}</span>
          </div>
          <div className={post.content}>{item.content}</div>
        </List.Item>
      )}
    />
  )
}

export default PostList;