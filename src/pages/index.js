import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Mv from "../components/Mv"
import { Container, Row, Col } from 'react-bootstrap'
import BlogItem from "../components/blogItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort:{
        fields: createdDate,
        order: DESC
      }) {
        edges {
          node {
            title
            slug
            createdDate(formatString: "YYYY-MM-DD")
            thumbnail {
             url
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Mv />
      <Container>
        <Row>
          {
            data.allContentfulBlogPost.edges.map((edge, index) => (
              <Col sm={4} key={index}>
                <BlogItem 
                  title={edge.node.title}
                  date={edge.node.date}
                  src={edge.node.thumbnail ? edge.node.thumbnail.url : null}
                  link={`blog/${edge.node.slug}`} />
              </Col>    
            ))
          }
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
