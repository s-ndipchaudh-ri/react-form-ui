import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropZone from "./Upload";
import Card from "react-bootstrap/Card";
import Fileupload from "./Fileupload";
import Upload from "./Upload";
import axios from "axios";
import {useStateValue} from '../StateProvider';
import { actionType } from "../actionType";
import Button from 'react-bootstrap/Button'



const Step3 = () => {
  const [imgArray, setImgArray] = useState([]);

  const [{imguploaded,limitexceed,address1,featuredImg,imgs,bedroom1,bathroom1,description1},dispatch] = useStateValue()
  console.log(address1)
  const showobj = {
    address : address1,
    bedroom : bedroom1,
    bathroom : bathroom1,
    images : imgArray,
    description : description1,
    featured_image : featuredImg
  }
  const showJson = () => {
    console.log(showobj)
  }

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/checkfiles")
      .then((data) =>{
        setImgArray(data.data.images);
        if(data.data.images.length >= 4){
          dispatch({
            type : actionType.LIMIT_EXCEED
          })
        };
      })  
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/checkfiles")
      .then((data) =>{
        setImgArray(data.data.images);
        if(data.data.images.length >= 4){
          dispatch({
            type : actionType.LIMIT_EXCEED
          })
        };
      })    
  }, [imguploaded]);

  

  
  return (
    <Row>
      <Col>
      <Row>
      <Col className="centerelements">
        <Upload />
        
      </Col>
      <Col>
      <Row>
      <h6>Click on Image to select it as a featured image</h6>
      </Row>
        <Row className="h50">
          {
            imgArray && imgArray.map((item,i) => {

              if((i+1)<=4) {
                return <SingleCard key={i} name={item}  />
              }
          
          })
          }
        </Row>
      </Col>
      </Row>
      <Row className="centerelements setatbottom">
        <Button variant="primary" onClick={()=>showJson()}>Show Data</Button>
      </Row>
      </Col>
    </Row>
  );
};

const SingleCard = ({name}) => {

  const [{featuredImg},dispatch] = useStateValue()
  const setfeaturedimg = (name) => {
    dispatch({
      type : actionType.ADD_FEATURED_IMG,
      featuredImg : name
    })
  }

  
  return (
    <Col className={(featuredImg === name) ? `centerelements addFeatured` : `centerelements`}>
      <img src={`/uploads/${name}`} onClick={()=>setfeaturedimg(name)} className={`previewBox`} />
      
    </Col>
  );
};

export default Step3;
