import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Router from 'next/router';
import Service from '../../service';
import { Row, Col, Menu, Icon } from 'antd';
// const navList = [
//   { title: '首页', icon: 'home', key: 'home', },
//   { title: '笔记', icon: 'edit', key: 'note', },
//   { title: '生活', icon: 'smile', key: 'life', }
// ]

// xs: <576px响应式栅格。
// sm：≥576px响应式栅格.
// md: ≥768px响应式栅格.
// lg: ≥992px响应式栅格.
// xl: ≥1200px响应式栅格.
// xxl: ≥1600px响应式栅格.

const Header = () => {
  const [navList, setNavList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Service.post.getTypeList();
      const navList = result.data.data;
      setNavList(navList);
    };
    fetchData();
  }, []);

  const onMenuClick = (e) => {
    if (e.key === 'index') {
      Router.push('/index');
    } else {
      Router.push(`/list?id=${e.key}`);
    }
  };

  return (
    <div className={styles.header}>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={12} lg={16} xl={18}>
          <span className={styles.logo}>Welson</span>
          <span className={styles.subtitle}>前端小学生, 学习会上瘾</span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={8} xl={6}>
          <Menu
            className={styles.menu}
            mode='horizontal'
            defaultSelectedKeys={['index']}
            // onClick={onMenuClick}
          >
            <Menu.Item className={styles.menuItem} key='index'>
              <Link href='/'>
              <a>
                <Icon type='home' />
                首页
              </a>
              </Link>
            </Menu.Item>
            {!!navList.length &&
              navList.map((v) => (
                <Menu.Item className={styles.menuItem} key={v.id}>
                  <Link href={`/list?id=${v.id}`}>
                  <a>
                    <Icon type={v.icon} />
                    {v.name}
                  </a>
                  </Link>
                </Menu.Item>
              ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
