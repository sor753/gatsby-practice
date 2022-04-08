import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { Container, Button } from 'react-bootstrap'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdDate
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`
const options = {
  renderNode: {
    "embedded-asset-block": node => {
      const { gatsbyImageData } = node.data.target
      if (!gatsbyImageData) {
        return null
      }
      console.log(gatsbyImageData)
     return <GatsbyImage image={gatsbyImageData} />
    },
  },
}
const BlogDetail = (props) => (
  <Layout>
    <Container style={{maxWidth:640}} className="pt-4">
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.createdDate}</p>
      { props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body, options) }
    </Container>
    <Container className="text-center">
      <Button href="/" variant="outline-info">一覧へ戻る</Button>
    </Container>
  </Layout>
)

export default BlogDetail
