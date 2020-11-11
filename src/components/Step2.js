import React,{useState,useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import Autocomplete from './autocompleteplace'
import {useStateValue} from '../StateProvider'
import {actionType} from '../actionType'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const Step2 = () => {
  const [{address1,bedroom1,bathroom1,description1},dispatch] = useStateValue()

  const [address,setAddress] = useState('')
  const [bedroom,setBedroom] = useState(1)
  const [bathroom,setBathroom] = useState(1)
  const [description,setDescription] = useState('')
  const [next,setNext] = useState(true)
  const [error,setError] = useState(false)
  const handleChange = address => {
    setAddress(address)
  };

 
  const handleSelect = address => {
    
    setAddress(address)
  };

  useEffect(() => {
    if(address !== undefined){
    
    if( address.trim() !=='' ){
      dispatch({
        type : actionType.ADD_ADDRESS,
        address1 : address
      })
  
      setNext(false)
    }else{
      setNext(true)
    }


    dispatch({
      type : actionType.ADD_BATHROOM,
      bathroom1 : bathroom
    })

    dispatch({
      type : actionType.ADD_BEDROOM,
      bedroom1 : bedroom
    })

    if( description.trim() !=='' ){
      dispatch({
        type : actionType.ADD_DESCRIPTION,
        description1 : description
      })
    }
    

    
  }
  }, [bedroom,bathroom,address,description])

  console.log(address1,description1,bedroom1,bathroom1)

  
  const searchOptions = {
    // types: ["(cities)"],
    componentRestrictions: { country: ["in"] },
    // types: ['city']
  };

  return (
    <Row className="h100 ">
      <Container className="centerelements">
        <Form className="w-50 main-form">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Address Here</Form.Label><span className="required">*</span>
            <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className=''>

<Form.Control
              {...getInputProps({
                placeholder: 'Start typing your address',
                className: 'location-search-input',
                
              })}
            />
                <div className='autocomplete-dropdown-container'>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion, i) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                    };

                    return (
                      <div
                        key={i}
                        className='cityNames'
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        <div className='cityName'>{suggestion.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
       
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>No. Of Bedrooms</Form.Label><span className="required">*</span>
            <Form.Control as="select" required onChange={(e)=>setBedroom(e.target.value)} defaultValue={bedroom1}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>No. of Bathroom</Form.Label><span className="required">*</span>
            <Form.Control as="select" required  onChange={(e)=>setBathroom(e.target.value)}  defaultValue={bathroom1}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="add some description"
              row={3}
              defaultValue={description1}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Row>
              <Col className="centerelements">
                <Link to="/">
                <Button>Back</Button>
                </Link>
              </Col>
              <Col className="centerelements">
              <Link to="/step3">
                <Button disabled={next}>Next</Button>
                </Link>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </Row>
  );
};

export default Step2;
