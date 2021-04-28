import React from 'react'
import {Container,Table,Row ,Col,Card,Button,ListGroup} from 'react-bootstrap'
import questions from  '../Data/questions'
const Home = () => {
 
  return (
      <div style={{padding:'3rem'}}>
   <div style={{margin:'1rem',marginBottom:'4rem',marginTop:'4rem'}}>  
    <Row xl={4} lg={4} md={2} sm={1}>
    <Col    >
    <Card  className='my-3 p-3 rounded cardHome'>
  <Card.Body>
    <Card.Title>Data Structure</Card.Title>
    <Card.Text>
      Explanation
    </Card.Text>
    <Button variant="primary">Click Here</Button>
  </Card.Body>
</Card>
</Col>
<Col >
  <Card className='my-3 p-3 rounded cardHome'>
  <Card.Body>
    <Card.Title>Daily-Contest</Card.Title>
    <Card.Text>
      Solve
    </Card.Text>
    <Button variant="primary">Click Here</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className='my-3 p-3 rounded cardHome'>
  <Card.Body>
    <Card.Title>Weekly-Contest</Card.Title>
    <Card.Text>
    Coding-Contest
    </Card.Text>
    <Button variant="primary">Register</Button>
  </Card.Body>
</Card>
</Col>
<Col >
<Card className='my-3 p-3 rounded cardHome'>
  <Card.Body>
    <Card.Title>Weekly-Contest</Card.Title>
    <Card.Text>
    Coding-Contest
    </Card.Text>
    <Button variant="primary">Register</Button>
  </Card.Body>
</Card>
</Col>
    </Row>
</div>


<Row md={1} lg={2} >
<Col >
  <Row lg={1}  md={2} sm={1} xl={2} >
  <Col >
<ListGroup as="ul" className='scrollCon' variant='flush'>
  <ListGroup.Item as="li"  variant='primary' active>
   DataStructure
  </ListGroup.Item>
  <ListGroup.Item as="li">LinkedList</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
   BinaryTree
  </ListGroup.Item>
  <ListGroup.Item as="li" >Array</ListGroup.Item>
</ListGroup>
</Col>
<Col>
<ListGroup as="ul" className='scrollCon' variant='flush'>
  <ListGroup.Item as="li" active >
 Company
  </ListGroup.Item>
  <ListGroup.Item as="li">Apple</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
   Amazon
  </ListGroup.Item>
  <ListGroup.Item as="li" >Microsoft</ListGroup.Item>
</ListGroup>
</Col>
<Col>
<ListGroup as="ul" className='scrollCon' variant='flush'>
  <ListGroup.Item as="li" active>
    Microsoft
  </ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Apple
  </ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
</Col>
<Col>
<ListGroup as="ul" className='scrollCon' variant='flush'>
  <ListGroup.Item as="li" active>
    Microsoft
  </ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Apple
  </ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
</Col>
</Row>
</Col>
<Col >

        <Table striped bordered hover responsive >
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Difficulty</th>
      <th>Tag</th>
      <th>Difficulty</th>
      <th>Tag</th>
    </tr>
  </thead>
  <tbody>
  {questions.map((question,index)=>(  <tr>
      <td>{index}</td>
      <td>{question.title}</td>
      <td>{question.difficulty}</td>
      <td>{question.tag}</td>
      <td>{question.submissions}</td>
      <td>@mdo</td>
    </tr>))}
  </tbody>
</Table>

</Col>
</Row>
</div>
  )
}

export default Home
