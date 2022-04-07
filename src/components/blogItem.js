import React from "react"
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import sampleImage from '../images/image_002.jpg'

const BlogItem = () => {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={sampleImage} />
      <Card.Body>
        <Card.Title>ブログ　タイトル</Card.Title>
        <Card.Text>
          2020/04/11
        </Card.Text>
        <Link to=''>see more</Link>
      </Card.Body>
    </Card>
  )
}

export default BlogItem
