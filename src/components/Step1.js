import React,{useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { BsPencil } from "react-icons/bs";
import { GrDocumentCsv } from "react-icons/gr";
import {Link} from 'react-router-dom'
import axios from 'axios'

const Step1 = (props) => {
  useEffect(() => {
    axios.get('http://localhost:5000/').then((data)=> {
      console.log(data)
    }) 
  }, [])
  
    return (
        <Row className="h100">
        <Col className="centerelements">
          <Link to="/step2">
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <BsPencil  size={30} />
            </Card.Header>
            <Card.Body>
              <Card.Title className="centerelements">
                Add from Scratch
              </Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col className="centerelements">
          <Card style={{ width: "18rem" }}>
            <Card.Header  className="">
              <GrDocumentCsv size={30} />
            </Card.Header>
            <Card.Body>
              <Card.Title className="centerelements">
                Upload from CSV
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   
  
    )
}

export default Step1
