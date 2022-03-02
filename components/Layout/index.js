import Head from 'next/head'
import layout from '../../styles/layout.module.css';
import { Row, Col } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Author from '../Author';
import Ad from '../Ad';


const Layout = ({ 
  pageTitle,
  children,
  asideChildren,
  Breadcrumb=null, 
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className={layout.main} type='flex' justify='center'>
        <Col className={layout.left} xs={24} sm={24} md={14} lg={12} xl={12}>
          {Breadcrumb && <Breadcrumb />}
          {children}
        </Col>
        <Col className={layout.right} xs={0} sm={0} md={8} lg={8} xl={6}>
          <Author />
          <Ad />
          {asideChildren}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Layout
