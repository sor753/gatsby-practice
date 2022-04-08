import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as Style from './Mv.module.scss'

const Mv = () => {
  return (
    <div className={Style.wrap}>
      <Container className={Style.content}>
        <Row>
          <Col sm={12} className="mx-auto">
            <div className={Style.siteHeading}>
              <h1>Gatsby blog</h1>
              <span>A Blog by Gatsby.js</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mv
