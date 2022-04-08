import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdDate
      body {
        raw
      }
    }
  }
`
const BlogDetail = (props) => (
  <Layout>
    <Container style={{maxWidth:640}} className="pt-4">
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.createdDate}</p>
      { props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body) }
    </Container>
  </Layout>
)

export default BlogDetail
