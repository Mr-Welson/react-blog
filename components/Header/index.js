import React from 'react';
import styles from './index.module.css';
import { Row, Col, Menu, Icon } from 'antd';

const menuList = [
  { title: '首页', icon: 'home', key: 'home', },
  { title: '笔记', icon: 'edit', key: 'note', },
  { title: '生活', icon: 'smile', key: 'life', }
]

// xs: <576px响应式栅格。
// sm：≥576px响应式栅格.
// md: ≥768px响应式栅格.
// lg: ≥992px响应式栅格.
// xl: ≥1200px响应式栅格.
// xxl: ≥1600px响应式栅格.

const Header = () => {
  return (
    <div className={styles.header}>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={12} lg={16} xl={18}>
          <span className={styles.logo}>Welson</span>
          <span className={styles.subtitle}>前端小学生, 学习会上瘾</span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={8} xl={6}>
          <Menu className={styles.menu} mode='horizontal'>
            {menuList.map(v => (
              <Menu.Item className={styles.menuItem} key={v.key}>
                <Icon type={v.icon} />
                {v.title}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header;