import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'

 export const query = graphql`
  query( $slug: String! ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const BlogDetail = (props) => (
  <Layout>
    <Container style={{maxWidth:640}} className="pt-4">
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
    </Container>
  </Layout>
)

export default BlogDetail
