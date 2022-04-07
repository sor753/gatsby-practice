import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Mv from "../components/Mv"
import { Container, Row, Col } from 'react-bootstrap'
import BlogItem from "../components/blogItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Mv />
      <Container>
        <Row>
          {
            data.allMarkdownRemark.edges.map((edge, index) => (
              <Col sm={4} key={index}>
                <BlogItem 
                  title={edge.node.frontmatter.title}
                  date={edge.node.frontmatter.date}
                  src={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
              </Col>    
            ))
          }
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
