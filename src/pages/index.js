import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Mv from "../components/Mv"
import { Container, Row, Col } from 'react-bootstrap'
import BlogItem from "../components/blogItem"

const IndexPage = () => (
  <Layout>
    <Mv />
    <Container>
      <Row>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
