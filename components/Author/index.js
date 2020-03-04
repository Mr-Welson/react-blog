import { Avatar, Divider } from "antd"
import styles from './index.module.css';
import Box from "../Box";

const Author = () => {
  return (
    <Box className={styles.author}>
      <div>
        <Avatar size={100} src='/avatar.jpg' />
      </div>
      <div className={styles.intro}>
        前端小学生，学习会上瘾
        <Divider>社交账号</Divider>
        <Avatar className={styles.link} size={28} icon='github' />
        <Avatar className={styles.link} size={28} icon='qq' />
        <Avatar className={styles.link} size={28} icon='wechat' />
      </div>
    </Box>
  )
}

export default Author;