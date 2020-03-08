import { List, Icon } from "antd";
import Link from 'next/link';
import styles from '../../styles/post.module.css';
import dayjs from 'dayjs';

// const postList = Array.from({ length: 20 }).map((v, k) => ({
//   id: Math.random(),
//   title: `笔记-${k}`,
//   date: '2020/03/03 22:00',
//   classify: '前端',
//   count: Math.floor(Math.random() * 100 + 10),
//   content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
// }))


const PostList = ({ postList }) => {
  return (
    <List
      header={<div>最新日志</div>}
      itemLayout='vertical'
      dataSource={postList}
      renderItem={item => (
        <List.Item key={item.id}>
          <div className={styles.title}>
            <Link href={`/detail?id=${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </div>
          <div className={styles.desc}>
            <span><Icon type='calender' />{dayjs(+item.createTime).format('YYYY/MM/DD HH:mm:ss')}</span>
            <span><Icon type='folder' />{item.typeName}</span>
            <span><Icon type='fire' />{item.viewCount}</span>
          </div>
          <div className={styles.introduce}>{item.introduce}</div>
        </List.Item>
      )}
    />
  )
}

export default PostList;