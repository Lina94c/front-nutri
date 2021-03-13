import { useState, useEffect } from "react"
import { Col, Row, Card, Button, Typography, Skeleton } from "antd"
import { getAllPlanes } from "../services/planes";
import { Link } from "react-router-dom"
const { Title } = Typography

function Planes() {
  const [planes, setPlanes] = useState(null)

  useEffect(() => {
    async function getResources() {
      const {
        data: { cosos }
      } = await getAllResouces()

      setResources(cosos)
    }
    getResources()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title>Resources:</Title>
      </Col>
      {resources ? (
        resources.map(resource => (
          <Col xs={{ span: 24 }} md={{ span: 8 }} key={resource._id}>
            <Card
              title={resource.name}
              cover={<img alt='example' src={resource.url} />}
              extra={<Link to={`/resource/${resource._id}`}>Details</Link>}
            >
              <Card.Meta description={resource.description} />
            </Card>
          </Col>
        ))
      ) : (
        <Skeleton active />
      )}
    </Row>
  )
}

export default Planes