import Head from 'next/head'
import layout from '../styles/layout.module.css';
import post from '../styles/post.module.css';
import { Row, Col, List, Icon } from 'antd';
import Header from '../components/Header';
import { useState } from 'react';

const postList = Array.from({ length: 20 }).map((v, k) => ({
  id: Math.random(),
  title: `笔记-${k}`,
  date: '2020/03/03 22:00',
  classify: '前端',
  count: Math.floor(Math.random()*100 + 10),
  content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
}))

const Home = () => {
  const [posts] = useState(postList);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className={layout.main} type='flex' justify='center'>
        <Col className={layout.left} xs={24} sm={24} md={14} lg={12} xl={12}>
          <List
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={posts}
            renderItem={item => (
              <List.Item key={item.id}>
                <div className={post.title}>{item.title}</div>
                <div className={post.desc}>
                  <span><Icon type='calender'/>{item.date}</span>
                  <span><Icon type='folder'/>{item.classify}</span>
                  <span><Icon type='fire'/>{item.count}</span>
                </div>
                <div className={post.content}>{item.content}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className={layout.right} xs={0} sm={0} md={8} lg={8} xl={6}>
          右侧
      </Col>
      </Row>
    </div>
  )
}

export default Home
